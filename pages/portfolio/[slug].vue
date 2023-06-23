<template>
  <GlobalWrapper :subText="false">
    <ClientOnly>
      <template #Title> Portfolio </template>
      <template #SubText> A Collection of Some of my Projects </template>

      <!-- ListOfPosts Component -->
      <template #WrapperBody>
        <div v-if="project">
          <section class="Projs">
            <article class="Proj xs12 sm10 md7">
              <div class="TopSect">
                <div class="ImgWrap">
                  <img :src="project.images?.items[0].url" :alt="project.images?.items[0].title" class="ProjImg"
                    draggable="false" />
                </div>
                <h2 class="Title">
                  {{ project.title }}
                </h2>
              </div>
              <div class="flex j-c-center a-i-center">
                <div v-for="(tech, i) in project.techs" :key="i" class="Techs">
                  <object class="SVG" :data="'defaults/stk/svg/' + tech + '.svg'" type="image/svg+xml"></object>
                </div>
              </div>
            </article>
          </section>
        </div>

        <!-- BODY -->
        <div class="flex j-c-center">
          <section v-html="parsedContent" class="Body xs12 sm10 md7 p-5"></section>
        </div>

      </template>
    </ClientOnly>
  </GlobalWrapper>
</template>
<script lang="ts">
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    const gqlVariables = ref({
      slug: route.params.slug,
    });

    const projectQuery = gql`
      query FetchProject ($slug: String) {
        project: projectsCollection(limit: 1, where: {slug: $slug}) {
          items {
            title
            slug
            techs: technologies
            description {
              json
            }
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

    const { data, pending } = useAsyncQuery(projectQuery, gqlVariables);

    const parsedContent = ref(null);

    const project = computed(() => {
      if (data.value) {
        parsedContent.value = documentToHtmlString(data.value.project?.items[0].description.json)

        return data.value.project.items[0];
      }
    });

    return {
      project,
      parsedContent
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
  background-color: #333;
  /* Dark background color for the featured image and title */
  background-color: $sec-color-trans;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
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

.Techs {
  width: 60px;
  height: 60px;
  // border: solid 3px $pri-color;
  // border-radius: 50%;
  margin: 0 5px;

  & .SVG {
    width: 100%;
    height: 100%;
  }
}

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
