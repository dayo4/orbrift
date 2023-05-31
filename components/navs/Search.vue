<template>
  <div
    :class="expanded ? 'Expanded' : ''"
    class="SearchBox flex j-c-center bg-gradient-2 shadow-3"
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
        <i @click="search" class="icon-search"></i>
      </div>

      <!-- SEARCH RESULT DISPLAYS HERE -->
      <div v-show="searchResult" class="SearchResult">
        <h3 class="text-center">
          Search Result - {{ searchResult ? searchResult.length : "0" }}
        </h3>
        <div v-for="(result, i) in searchResult" :key="i">
          <h5
            @click="open(result.url)"
            class="ResultList font-5 m-5 t-black cursor-pointer"
          >
            {{ result.title }}
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
</template>
<script lang="ts">

export default {
  setup(_, { emit }) {
    const { $Process, $contentApi } = useNuxtApp();
    const searchText = ref("");
    // const searchOn = ref(false);
    const searchResult = ref(null);
    const expanded = ref(false);
    const error = ref(false);

    const route = useRoute();
    const router = useRouter();

    const search = async () => {
      try {
        if (searchText.value) {
          $Process.add("Searching!");

          error.value = false;
          expanded.value = false;

          const data = await $contentApi.get(
            `search/?search=${searchText.value}&per_page=10`
          );

          if (data) {
            searchResult.value = data;
            expanded.value = true;
          }

          $Process.hide();
          return;
        }
      } catch (err) {
        error.value = true;
        expanded.value = true;
        $Process.add("An Error Occured");
        $Process.resolve();
      }
    };

    const open = (url: string) => {
      const slug = url.split(".com/")[1];
      router.push({ path: "/posts/" + slug });
    };

    watch(
      () => route.path,
      (newPath, oldPath) => {
        emit("searchoff");
      }
    );

    return {
      searchText,
      searchResult,
      expanded,
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

  transition: 1s;

  &.Expanded {
    height: 100% !important;
  }

  & > i {
    position: absolute;
    font-size: 35px;
    right: 5px;
    top: 2px;
    color: white;
    cursor: pointer;
    z-index: 101;
    border: solid 0.5px white;
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
      right: 15px;
      top: 7px;
      font-size: 20px;
      margin: 0px 3px;
      border-radius: 3px;
      cursor: pointer;
      &:active {
        background-color: $cyan-3;
      }
    }
  }
}

.SearchResult {
  background-color: white;
  border-radius: 5px;
  padding-bottom: 6px;

  & .ResultList {
    color: black;
  }
  & .ResultList:hover {
    color: $blue-grey-1;
    // color: rgb(49, 49, 49);
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

@include xs-and-up {
}

@include xxs-only {
}
</style>
