<template>
  <GlobalWrapper>
    <template #Title> Portfolio </template>
    <template #SubText> A Collection of Some of my Projects </template>

    <!-- ListOfPosts Component -->
    <template #WrapperBody>
      <div v-if="projects && projects.length > 0">
        <section class="Projs">
          <article
            v-for="(project, i) in projects"
            :key="i"
            class="Proj xs12 sm9 md7 lg6"
          >
            <div class="TopSect" @click="openProject(project.slug)">
              <div class="ImgWrap">
                <img
                  :src="project.images?.items[0].url"
                  :alt="project.images?.items[0].title"
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
            <p
              class="Summary"
              v-html="project.summary"
              @click="openProject(project.slug)"
            ></p>
          </article>
        </section>

        <!-- Pagination -->
        <section class="flex j-c-center">
          <div class="Pagins xs12 sm11 md8">
            <button
              @click="switchPage(pagin.current - 1)"
              class="btn bg-trans-4"
            >
              <span class="icon-angle-double-left font-6"></span>
              <span class="font-1 mt-1">PREV</span>
            </button>
            <button class="Nums btn bg-white" v-for="i in pagin.pages" :key="i">
              <span
                @click="switchPage(i)"
                :class="pagin.current === i ? 'active' : ''"
                >{{ i }}</span
              >
            </button>
            <button
              @click="switchPage(pagin.current + 1)"
              class="btn bg-trans-4"
            >
              <span class="font-1 mt-1">NEXT</span>
              <span class="Icon icon-angle-double-right font-6"></span>
            </button>
          </div>
        </section>
        <!-- Pagination -->
      </div>
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
export default {
  setup() {
    const router = useRouter();

    const { $myMetaInfo } = useNuxtApp();

    useSeoMeta($myMetaInfo({ title: "projects" }));

    const pagin = ref({
      pages: 4,
      current: 1,
    });

    const projectsQuery = gql`
      query {
        projects: projectsCollection(limit: 5, order: order_ASC) {
          items {
            title
            slug
            summary
            techs: technologies
            images: imagesCollection {
              items {
                url
                title
              }
            }
          }
        }
      }
    `;

    const { data, pending } = useAsyncQuery({
      query: projectsQuery,
      // cache: false
    });

    const projects = computed(() => {
      if (data.value) {
        return data.value.projects.items; //?.blogPostCollection.items;
      }
    });

    const openProject = (slug: string) => {
      router.push({ path: "/projects/" + slug });
    };



    const switchPage = (v: number) => {

    };

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
  cursor: pointer;
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
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: $blue-grey;
  // color: rgb(59, 59, 59);
  cursor: pointer;
}

.Pagins {
  display: flex;
  justify-content: space-between;
  margin: 30px 20px 10px 20px;
  padding: 5px;
  width: 100%;
  border-bottom: rgb(45, 45, 45) solid 2px;
  border-top: rgb(45, 45, 45) solid 2px;
  border-radius: 10px;
  & button {
    box-shadow: none;
  }
  & .Nums {
    padding: 0;
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
