<template>
  <GlobalWrapper :subText="false">
    <!-- <ClientOnly> -->
    <template #Title> Portfolio </template>
    <template #SubText> A Collection of Some of my Projects </template>

    <!-- ListOfPosts Component -->
    <template #WrapperBody>
      <div v-if="project">
        <section class="Projs">
          <article class="Proj xs12 sm9 md7 lg6">
            <div class="TopSect">
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
                  :src="'/defaults/stk/svg/' + tech + '.svg'"
                  type="image/svg+xml"
                />
              </div>
            </div> -->
          </article>
        </section>
      </div>

      <!-- BODY -->
      <div class="flex j-c-center">
        <section v-html="project?.body" class="Body xs12 sm10 md7 p-5"></section>
      </div>
    </template>
    <!-- </ClientOnly> -->
  </GlobalWrapper>
</template>
<script lang="ts">
export default {
  setup() {
    const route = useRoute();

    const gqlVariables = ref({
      slug: route.params.slug,
    });

    const projectQuery = gql`
      query FetchProject($slug: String) {
        project: projectsCollection(limit: 1, where: { slug: $slug }) {
          items {
            title
            slug
            techs: technologies
            body
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
      query: projectQuery,
      variables: gqlVariables,
      // cache: false,
    });

    const project = computed(() => {
      if (data.value) {
        // console.log(data.value)
        return data.value.project.items[0];
      }
    });

    return {
      project,
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
  border-radius: 4px;
}

.TopSect {
  background-color: #333;
  background-color: $sec-color-trans;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

.ImgWrap {
  width: 100%;
  padding-top: 56.25%;
  /* 16:9 aspect ratio (9 divided by 16, multiplied by 100) */
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
  font-size: 20px;
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
</style>
