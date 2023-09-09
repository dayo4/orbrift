<template>
  <transition name="fade-in">
    <div
      :class="expanded ? 'Expanded' : ''"
      class="SearchBox flex j-c-center shadow-3"
    >
      <i @click="$emit('searchoff')" class="icon-cancel"></i>
      <div class="Search xs12 sm10 md9 lg7">
        <div class="InputBox">
          <input
            @keydown.enter.prevent="search"
            v-model="searchText"
            type="search"
            name="search"
          />
          <i @click="search()" class="icon-search"></i>
        </div>
        <!-- SEARCH RESULT DISPLAYS HERE -->
        <div v-show="searchResult" class="SearchResult">
          <h3 class="text-center">
            Search Results - {{ searchResult?.length || "0" }}
          </h3>
          <div v-for="(result, i) in searchResult" :key="i">
            <h5
              @click="open(result.slug)"
              class="ResultList font-5 m-5 cursor-pointer"
            >
              - {{ result.title }}
            </h5>
          </div>
          <div v-if="searchResult && searchResult.length === 0">
            <h5 class="font-5 m-5 t-blue--3">
              No search result found for the text you entered. Try searching
              something else.
            </h5>
          </div>
          <div v-if="error">
            <h5 class="font-5 m-5 t-red--3">
              Unable to connect. Try checking your internet connection.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { useProcess } from "@/store";
import * as contentful from "contentful";

export default {
  setup(_, { emit }) {
    const runtimeConfig = useRuntimeConfig();

    const $Process = useProcess();
    const searchText = ref("");

    const expanded = ref(false);
    const startSearching = ref(false);

    const route = useRoute();
    const router = useRouter();

    const client = contentful.createClient({
      space: runtimeConfig.public.contentfulSpaceId,
      environment: "master",
      accessToken: runtimeConfig.public.contentfulDeliveryKey,
    });

    const searchResult = ref<any[] | null>(null);
    const error = ref(false);

    const search = async () => {
      if (searchText.value && !startSearching.value) {
        $Process.add("Searching!");
        startSearching.value = true;
        expanded.value = false;

        const { data, error: searchError } = await useAsyncData(async () => {
          if (searchText.value && startSearching.value) {
            const { items } = await client.getEntries({
              content_type: "blogPost",
              limit: 10,

              select: ["fields.title", "fields.slug"],
              order: ["-sys.createdAt"],
              "fields.content[match]": searchText.value,
            });

            return items.map((item) => {
              const { title, slug } = item.fields;
              return {
                title,
                slug,
              };
            });
          }
          return;
        });

        if (data.value) {
          expanded.value = true;
          startSearching.value = false;
          $Process.hide();
          searchResult.value = data.value;
        } else if (searchError.value) {
          expanded.value = true;
          startSearching.value = false;
          $Process.add("An Error Occured");
          $Process.resolve();
          error.value = true;
        }
      }
    };

    const open = (slug: string) => {
      router.push({ path: "/posts/" + slug });
    };

    watch(
      () => route.path,
      (newPathc, oldPath) => {
        emit("searchoff");
      }
    );

    return {
      searchText,
      searchResult,
      expanded,
      startSearching,
      error,
      search,
      open,
    };
  },
};
</script>
<style lang="scss" scoped>
.SearchBox {
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 100;
  overflow-y: scroll;
  background-color: $sec-color;

  transition: 1s;

  &.Expanded {
    height: 100% !important;
  }

  & > i {
    position: absolute;
    font-size: 25px;
    right: 5px;
    top: 2px;
    color: $pri-color;
    cursor: pointer;
    z-index: 101;
    border: solid 0.5px $pri-color;
    border-radius: 3px;
  }
}

.Search {
  position: relative;
  width: 100%;

  & .InputBox {
    position: relative;
    width: 100%;
    margin: 6px;
    color: black;
    & input {
      width: calc(100% - 10px);
      background-color: white;
      color: black;
    }
    & > i {
      position: absolute;
      right: 13px;
      top: 3px;
      font-size: 20px;
      margin: 0px 3px;
      padding: 3px;
      border-radius: 3px;
      cursor: pointer;
      color: $pri-color;
      background-color: $sec-color-trans;
      &:active {
        background-color: $sec-color-trans-2;
      }
    }
  }
}

.SearchResult {
  background-color: $light-color;
  border-radius: 5px;
  padding-bottom: 6px;

  & .ResultList {
    color: $dark-text-color;
  }
  & .ResultList:hover {
    color: $pri-color;
  }
}

@include sm-and-down {
  .Search {
    & .InputBox {
      width: calc(100% - 10px);
    }
  }

  .SearchBox {
    & > i {
      font-size: 28px !important;
      right: 5px;
      top: 6px;
    }
  }
}

@include xs-only {
  .Search {
    position: relative;
    width: 100%;

    & .InputBox {
      width: calc(100% - 60px);
    }
  }

  .SearchBox {
    & > i {
      font-size: 25px !important;
      right: 5px;
      top: 8px;
    }
  }
}

// @include xs-and-up {
// }

// @include xxs-only {
// }
</style>
