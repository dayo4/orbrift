<template>
  <GlobalWrapper>
    <template #Title> Request My Service </template>
    <template #SubText>
      A seamless web experience that will make your business stand out
    </template>

    <template #WrapperBody>
      <div class="flex j-c-center">
        <div class="xs11 sm10 md8 lg6">
          <section class="flex j-c-center">
            <div class="xs4 sm3 md2 mb-7">
              <img src="/defaults/pgs/orbrift_ab3.jpg" draggable="false" />
            </div>
          </section>

          <section class="TopInfo bg-blue-5 p-3 mb-7 mt-6">
            <h3 class="text-center t-white letter-space-1">
              It starts with a simple request
            </h3>
            <!-- <div class="text-center font-7 t-white">Just A Few Details</div> -->
          </section>

          <section>
<p>
You might be expecting to see a list of options with price tags, but NO. 
</p>
<p>
  Your company and brand is unique. Please provide some specific details of the values you want, so that i can provide you with result that truely matters to you. I usually reply within a day.
</p>
</section>
  
<!-- Email -->
          <Section class="mb-5">
            <template #SectHead>
              <span>Your Email</span>
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
                placeholder="Enter your email"
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
                placeholder="Enter your name"
              />
            </template>
          </Section>

          <!-- Business Description -->
          <Section class="mb-5">
            <template #SectHead>
              <span
                >Tell me about your business and specific service you are
                looking for</span
              >
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
                placeholder="Enter information about the service you require"
              ></div>
            </template>
          </Section>

          <!-- Special Website Features -->
          <Section class="mb-5">
            <template #SectHead>
              <span
                >Tell me all the specific details, values and features that you would
                like to get from this.
              </span>
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
                placeholder="Enter the details and features that you desire"
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
          <div class="flex j-c-center my-8">
            <Button
              @clicked="send"
              type="action"
              size="medium"
              icon="icon-forward"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </template>
  </GlobalWrapper>
</template>
<script lang="ts">
import { $Validator, $General } from "@/addons";
import { useMailer, useProcess } from "@/store";

export default {
  setup() {
    const $Mailer = useMailer();
    const $Process = useProcess();

    const { $myMetaInfo } = useNuxtApp();
    useSeoMeta($myMetaInfo({ title: "Get Started On Your Dream Site" }));

    const email = ref("");
    const name = ref("");
    const description = ref("");
    const features = ref("");
    const budget = ref("");

    const errorRefs = reactive({
      email_err: "",
      name_err: "",
      description_err: "",
      features_err: "",
      budget_err: "",
    });

    const budget_custom = ref(false);

    const { email_err, name_err, description_err, features_err, budget_err } =
      toRefs(errorRefs);

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
          const descInput = ref(null);
          const featInput = ref(null);

          // @ts-ignore
          grecaptcha.ready(() => {
            $Process.add("Verifying user");
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
                  $Process.add("Successful!");

                  name.value = email.value = budget.value = "";
                  (descInput.value as HTMLDivElement).textContent = "";
                  (featInput.value as HTMLDivElement).textContent = "";
                }
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
      description,
      features,
      budget,

      email_err,
      name_err,
      description_err,
      features_err,
      budget_err,

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
  background-color: $sec-color;
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
