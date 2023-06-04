<template>
  <GlobalWrapper :header="false">
    <template #WrapperTitle> Get Started On Your Dream Site </template>

    <template #WrapperBody>
      <div class="flex j-c-center">
        <div class="xs12 sm10">
          <section class="Quote">
            Let's help you create a professional modern website that will make
            your business or organization stand out
          </section>

          <section class="flex j-c-center">
            <div class="xs4 sm3 md2 mb-7">
              <img src="/defaults/pgs/orbrift_ab3.jpg" draggable="false" />
            </div>
          </section>

          <section class="TopInfo bg-blue-5 p-3 mb-7 mt-6">
            <div class="text-center font-2 t-white letter-space-1">
              It starts with a simple request
            </div>
            <div class="text-center font-7 t-white">Just A Few Details</div>
          </section>

          <!-- Email -->
          <Section class="mb-5">
            <template #SectHead>
              <span>Your E-mail</span>
            </template>
            <template #SectBody>
              <div>
                <span v-if="email_err" class="Error t-red-1">{{
                  email_err
                }}</span>
                <i v-else class="font-2"
                  >Please ensure your E-mail is correct!</i
                >
              </div>
              <input
                v-model="email"
                @input="email_err = ''"
                type="email"
                placeholder="Input your email"
              />
            </template>
          </Section>

          <!-- Name -->
          <Section class="mb-5">
            <template #SectHead>
              <span>Your Name</span>
            </template>
            <template #SectBody>
              <span v-show="name_err" class="Error t-red-1">{{
                name_err
              }}</span>
              <input
                v-model="name"
                @input="name_err = ''"
                type="text"
                placeholder="Input your name"
              />
            </template>
          </Section>

          <!-- Business Description -->
          <Section class="mb-5">
            <template #SectHead>
              <span>Tell us about your business and website purpose</span>
            </template>
            <template #SectBody>
              <span v-show="description_err" class="Error t-red-1">{{
                description_err
              }}</span>
              <div
                ref="descInput"
                @input="setDescription"
                class="TextArea bg-white font-5 br2 p-7 mt-2"
                contenteditable="true"
                placeholder="Enter your text here"
              ></div>
            </template>
          </Section>

          <!-- Special Website Features -->
          <Section class="mb-5">
            <template #SectHead>
              <span
                >Tell us all the features that you would like to have on your
                site.</span
              >
            </template>
            <template #SectBody>
              <span v-show="features_err" class="Error t-red-1">{{
                features_err
              }}</span>
              <div
                ref="featInput"
                @input="setFeatures"
                class="TextArea bg-white font-5 br2 p-7 mt-2"
                contenteditable="true"
                placeholder="Enter your text here"
              ></div>
            </template>
          </Section>

          <!-- Budget -->
          <Section class="mb-5">
            <template #SectHead>
              <span>How much do you plan to spend on this project?</span>
            </template>
            <template #SectBody>
              <input
                @input="changeBudget"
                type="text"
                placeholder="Enter Your Budget Range"
              />
            </template>
          </Section>

          <!-- Server Response Error -->
          <transition name="expand">
            <div v-if="success || error" class="mt-5">
              <div
                :class="error ? 'bg-pink-5 t-red-1' : 'bg-lime-4 t-green-1'"
                class="Alert p-3 b1"
              >
                {{ success || error }}
              </div>
            </div>
          </transition>

          <!-- Send button -->
          <button
            ref="sendBtn"
            @click="send"
            class="btn pri-gradient-btn shadow-5 font-5 br4 mt-5 m-auto noselect"
          >
            <span class="icon-forward mr-3"></span>
            <span>Done</span>
          </button>
        </div>
      </div>
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
import { $Validator, $Obstacl, $General } from "@/addons";
import { useMailer, useProcess } from "@/store";

export default {
  setup() {
    const $Mailer = useMailer();
    const $Process = useProcess();

    const { $myMetaInfo } = useNuxtApp();
    useSeoMeta($myMetaInfo({ title: "Get Started On Your Dream Site" }));

    const email = ref("");
    const name = ref("");
    const site_status = ref("");
    const purpose = ref("");
    const type = ref("");
    const template = ref("");
    const logo = ref("");
    const description = ref("");
    const features = ref("");
    const budget = ref("");

    const errorRefs = reactive({
      email_err: "",
      name_err: "",
      site_status_err: "",
      purpose_err: "",
      type_err: "",
      template_err: "",
      description_err: "",
      features_err: "",
      budget_err: "",
    });

    const site_status_custom = ref(false);
    const purpose_custom = ref(false);
    const type_custom = ref(false);
    const template_custom = ref(false);
    const budget_custom = ref(false);

    const {
      email_err,
      name_err,
      site_status_err,
      purpose_err,
      type_err,
      template_err,
      description_err,
      features_err,
      budget_err,
    } = toRefs(errorRefs);

    let error = $Mailer.error;

    let success = $Mailer.success;

    const changeBudget = (e: Event) => {
      budget_err.value = "";
      budget.value = (e.target as HTMLInputElement).value;
    };

    const resetBudget = () => {
      budget_err.value = "";
      budget_custom.value = false;
    };

    const setDescription = (e: MouseEvent) => {
      description.value = (e.target as HTMLElement).textContent;
      if (description_err.value) {
        description_err.value = "";
      }
    };

    const setFeatures = (e: MouseEvent) => {
      features.value = (e.target as HTMLElement).textContent;
      if (features_err.value) {
        features_err.value = "";
      }
    };

    const send = () => {
      if (validate()) {
        // @ts-ignore
        if (typeof grecaptcha !== "undefined") {
          start();
        } else {
          $Process.add("Launching recaptcha");
          $Mailer.setError("");

          $General
            .loadScript()
            .then(() => {
              start();
              $General.hideCaptchaBadge();
            })
            .catch(() => {
              $Process.add("Failed");
              $Mailer.setError(
                "Unable to load recaptcha, check your connection and try again."
              );
              $Process.resolve();
            });
        }

        //! Start sending message
        function start() {
          /* Refs to template elements */
          const sendBtn: Ref<HTMLButtonElement | null> = ref(null);
          const descInput = ref(null);
          const featInput = ref(null);

          // @ts-ignore
          grecaptcha.ready(() => {
            $Process.add("Verifying user");
            $Obstacl.create(sendBtn, {
              action: function () {
                // @ts-ignore
                grecaptcha
                  .execute("6LfWRMQbAAAAAG0QCV3Blkn1lFuPB64l-zjYnRmU", {
                    action: "projEnq",
                  })
                  .then(async function (token: string) {
                    $Mailer.setError("");
                    $Mailer.setSuccess("");

                    const data = await $Mailer.sendProjectEnq({
                      email: email.value,
                      name: name.value,
                      description: description.value,
                      features: features.value,
                      budget: budget.value,

                      token: token,
                    });
                    if (data) {
                      $Obstacl.destroy(sendBtn);

                      $Process.add("Successful!");

                      name.value = email.value = budget.value = "";
                      (descInput.value as HTMLDivElement).textContent = "";
                      (featInput.value as HTMLDivElement).textContent = "";
                    }
                  });
              },
            });
          });
        }
      }
    };

    const validate = () => {
      function schemaTemplate(fieldName: string, data: any) {
        return {
          fieldName,
          data,
          rules: {
            required: true,
          },
        };
      }

      const schema = [
        {
          fieldName: "Email",
          data: email.value,
          rules: {
            required: true,
            email: true,
          },
        },
        schemaTemplate("Name", name.value),
        schemaTemplate("Description", description.value),
        schemaTemplate("Features", features.value),
      ];

      if ($Validator.validate(schema)) {
        return true;
      }

      const errors = $Validator.getErrors();
      Object.keys(errors).forEach((key) => {
        errorRefs[key.toLowerCase() + "_err"] = errors[key];
      });
    };

    onBeforeUnmount(() => {
      $Mailer.setError("");
      $Mailer.setSuccess("");
    });

    return {
      email,
      name,
      site_status,
      purpose,
      type,
      template,
      logo,
      description,
      features,
      budget,

      email_err,
      name_err,
      site_status_err,
      purpose_err,
      type_err,
      template_err,
      description_err,
      features_err,
      budget_err,

      site_status_custom,
      purpose_custom,
      type_custom,
      template_custom,
      budget_custom,

      error,
      success,

      changeBudget,
      resetBudget,
      setDescription,
      setFeatures,

      send,
    };
  },
};
</script>
<style lang="scss" scoped>
/* NOTE: "GenFormStyle GenFormWrapper" shared classes are found in the main "Auth" components */
.TopInfo {
  border-radius: 4px 4px 15px 15px;
  @include bg-gradient-2;
}
.Quote {
  text-align: center;
  // font-family: "Itim", "Roboto", sans-serif;
  font-size: 30px;
  color: $top-quotes-color;
  padding: 0 20px 10px 20px;
  margin: 40px 0;
}

.TextArea {
  min-height: 150px;
  max-height: 200px;
  border: 1px $blue-grey-3 solid;
}

.Error {
  font-weight: 400;
}
.Alert {
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  letter-spacing: 1px;
  min-height: 50px;
  max-height: 100px;
  border-left: none;
  border-right: none;
  border-radius: 3px;
  overflow-x: hidden;
  overflow-y: auto;
}

input[type="text"],
input[type="email"] {
  height: 50px;
  width: 100%;
  display: block;
  padding: 5px 10px;
  margin: 3px 0 10px 0;
  flex-grow: 1;
  font-size: 18px;
  border-top: 1px $blue-grey-3 solid;
  border-bottom: 1px $blue-grey-3 solid;
  border-left: none;
  border-right: none;
}

label {
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 8px;
}
input[type="radio"] {
  height: 16px;
  width: 16px;
}
</style>
