<template>
  <GlobalWrapper>
    <template #Title> Projects </template>
    <template #SubText> A Collection of Some of my Projects </template>

    <!-- ListOfPosts Component -->
    <template #WrapperBody>
      <div v-if="projects && projects.length > 0">
        <section class="Projs">
          <article
            v-for="(project, i) in projects"
            :key="i"
            class="Proj basis-full sm:basis-8/12 md:basis-7/12 lg:basis-6/12 xs12 sm9 md7 lg6"
          >
            <div class="TopSect select-none">
              <div class="ImgWrap">
                <img
                  :src="project.images[0].fields.file.url"
                  :alt="project.images[0].fields.file.title"
                  class="ProjImg"
                  draggable="false"
                />
              </div>
              <h2 class="Title">
                {{ project.title }}
              </h2>
            </div>

            <!-- <div class="flex j-c-center a-i-center">
              <div v-for="(tech, i) in project.techs" :key="i" class="Techs">
                <img
                  class="SVG"
                  :src="'defaults/stk/svg/' + tech + '.svg'"
                  type="image/svg+xml"
                />
              </div>
            </div> -->
            <p class="Summary" v-html="project.summary"></p>
            <div class="flex justify-end mt-6 mr-8">
              <button @click="openProject(project.slug)" class="ViewBtn">
                <span class="icon-right"></span>
              </button>
            </div>
          </article>
        </section>

        <!-- Pagination -->
        <section class="flex justify-center">
          <div class="Pagins basis-full sm:basis-11/12 md:basis-8/12">

            <button class="Nums btn bg-white" v-for="i in pagin.pages" :key="i">
              <span
                @click="switchPage(i)"
                :class="pagin.current === i ? 'active' : ''"
                >{{ i }}</span
              >
            </button>

          </div>
        </section>
        <!-- Pagination -->
      </div>
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
import {createClient} from "contentful";
import contentful from "contentful";

export default {
  setup() {
    const router = useRouter();

    const { $myMetaInfo } = useNuxtApp();
    const runtimeConfig = useRuntimeConfig();
const crClient =  process.env.NODE_ENV === 'development' ? createClient : contentful.createClient
    const client = crClient({
      space: runtimeConfig.public.contentfulSpaceId,
      environment: "master",
      accessToken: runtimeConfig.public.contentfulDeliveryKey,
    });

    useSeoMeta($myMetaInfo({ title: "projects" }));

    const pagin = ref({
      pages: 4,
      current: 1,
    });

    const { data, error } = useAsyncData(async () => {
      const { items } = await client.getEntries({
        content_type: "projects",
        limit: 10,

        select: ["fields.title", "fields.slug", "fields.images", "fields.summary"],
        order: ["fields.order"],
      });

      return items.map((item) => {
        const { title, slug, images, summary } = item.fields;
        return {
          title,
          slug,
          images,
          summary
        };
      });
    });

// console.log(data)
    const projects = computed(() => {
      if (data.value) {
        return data.value;
      }
    });

    const openProject = (slug: string) => {
      if (String(slug).startsWith("https://")) {
        window.open(slug, "_blank");
      } else {
        router.push({ path: "/projects/" + slug });
      }
    };

    const switchPage = (v: number) => {};

    return {
      pagin,
      projects,
      openProject,
      switchPage,
    };
  },
};
</script>
<style lang="scss" scoped>
.Projs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.Proj {
  padding: 16px;
  background-color: #f5f5f5;
  // background-color: $sec-color;
  border-radius: 4px;
}

.TopSect {
  background-color: #333; /* Dark background color for the featured image and title */
  background-color: $sec-color-trans;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}
.ImgWrap {
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio (9 divided by 16, multiplied by 100) */
  position: relative;
}
.ProjImg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.Title {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  color: $pri-color;
}

.ViewBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 3px 20px;
  cursor: pointer;
  outline: none;
  color: $pri-color;
  // font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: $shadow-3;
  background-color: $sec-color;
  &:active {
    box-shadow: none;
  }
}
// .Techs {
//   width: 60px;
//   height: 60px;
//   // border: solid 3px $pri-color;
//   // border-radius: 50%;
//   margin: 0 5px;
//   & .SVG {
//     width: 100%;
//     height: 100%;
//   }
// }

.Summary {
  margin-top: 15px;
  font-size: 14px;
  font-weight: 500;
  color: $blue-grey;
  // color: rgb(59, 59, 59);
}

.Pagins {
  display: flex;
  justify-content: center;
  margin: 60px 20px 10px 20px;
  padding: 5px;
  width: 100%;
  border-bottom: rgba(45, 45, 45, 0.25) solid 2px;
  border-top: rgb(45, 45, 45, 0.25) solid 2px;
  border-radius: 10px;
  background-color: white;
  // & button {
  //   box-shadow: none;
  // }
  & .Nums {
    padding: 0;
    margin: 0 7px;
    box-shadow: none;
    text-align: center;
    & span {
      border-radius: 4px;
      border-top: $grey solid 1px;
      border-bottom: $grey solid 1px;
      color: $blue-grey--2;
      padding: 5px 8px;
      margin: 0 5px;
      &:hover {
        background-color: $grey-3;
      }
      &.active {
        background-color: $grey-2;
      }
    }
  }
}
</style>
