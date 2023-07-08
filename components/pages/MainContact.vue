<template>
  <section class="flex j-c-center">
    <div class="GenFormStyle xs11 sm9 md7 lg6 z-index-1 noselect">
      <section v-if="topInfo" class="TopInfo bg-blue-5 p-3 mb-7">
        <div class="t-white">Simply send a request using the form below.</div>
        <div class="Mediums flex a-i-center j-c-center font-12">
          <a
            class="icon-whatsapp t-green--1 no-deco"
            title="whatsapp"
            href="https://wa.me/message/25GPJOSG52QCO1"
            target="_blank"
          ></a>
        </div>
      </section>

      <div class="Section">
        <span class="Head">Name</span>
        <span v-show="name_err" class="Error t-red-1">{{ name_err }}</span>
        <input
          v-model="name"
          @input="name_err = ''"
          type="text"
          placeholder="Input your name"
        />
      </div>

      <div class="Section">
        <span class="Head">E-mail</span>
        <span v-if="email_err" class="Error t-red-1">{{ email_err }}</span>
        <i v-else class="font-2">Please ensure your E-mail is correct!</i>
        <input
          v-model="email"
          @input="email_err = ''"
          type="email"
          placeholder="Input your email"
        />
      </div>

      <div class="Section">
        <span class="Head">Your Message</span>
        <span v-show="msg_err" class="Error t-red-1">{{ msg_err }}</span>
        <div
          ref="msgInput"
          @input="setMsg"
          class="TextArea bg-white font-5 br2 p-7 mt-2"
          contenteditable="true"
          placeholder="Type your message"
        ></div>
      </div>

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
          Send {{ target === "app" ? "Mail" : "" }}
        </Button>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { $Validator, $General } from "@/addons";
import { useMailer, useProcess } from "@/store";

export default {
  props: {
    topInfo: {
      required: false,
      default: true,
      type: Boolean,
    },
    target: {
      required: false,
      default: "app",
      type: String,
    },
    action: {
      required: false,
      default: "contactForm",
      type: String,
    },
  },

  setup(props) {
    const $Mailer = useMailer();
    const $Process = useProcess();

    const email = ref("");
    const name = ref("");
    const msg = ref("");

    const showCaptcha = ref(false);

    const errorRefs = reactive({
      email_err: "",
      name_err: "",
      msg_err: "",
    });

    const { email_err, name_err, msg_err } = toRefs(errorRefs);

    const error = computed(() => $Mailer.error);
    const success = computed(() => $Mailer.success);

    const setMsg = (e: any) => {
      msg.value = (e.target as HTMLElement).textContent;
      if (msg_err.value) {
        msg_err.value = "";
      }
    };

    const send = () => {
      // Validate entries
      if (validate()) {
        // Check if grecaptcha is already loaded, otherwise load it up
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
          const msgInput = ref(null);

          // @ts-ignore
          grecaptcha.ready(() => {
            $Process.add("Verifying user");

            // @ts-ignore
            grecaptcha
              .execute("6LfWRMQbAAAAAG0QCV3Blkn1lFuPB64l-zjYnRmU", {
                action: props.action,
              })
              .then(async function (token: string) {
                $Mailer.setError("");
                $Mailer.setSuccess("");

                const data = await $Mailer.sendMail({
                  name: name.value,
                  email: email.value,
                  message: msg.value,
                  target: props.target,
                  token: token,
                });

                if (data) {

                  name.value = email.value = msg.value = "";
                  (msgInput.value as HTMLDivElement).textContent = "";
                }
              });
          });
        }
      }
    };

    const validate = () => {
      const schema = [
        {
          fieldName: "Email",
          data: email.value,
          rules: {
            required: true,
            email: true,
          },
        },
        {
          fieldName: "Name",
          data: name.value,
          rules: {
            required: true,
            string: true,
            // min: 3,
            // max: 50,
          },
        },
        {
          fieldName: "Message",
          data: msg.value,
          rules: {
            required: true,
            string: true,
            // min: 20,
            // max: 4000,
          },
        },
      ];

      if ($Validator.validate(schema)) {
        return true;
      }

      const errors = $Validator.getErrors();
      email_err.value = errors["Email"];
      name_err.value = errors["Name"];
      msg_err.value = errors["Message"];
    };

    onBeforeUnmount(() => {
      $Mailer.setError("");
      $Mailer.setSuccess("");
    });

    return {
      email,
      name,
      msg,

      email_err,
      name_err,
      msg_err,

      error,
      success,

      showCaptcha,

      setMsg,
      send,
    };
  },
};
</script>
<style lang="scss">
/* NOTE: "GenFormStyle GenFormWrapper" shared classes are found in the main "Auth" components */
.TopInfo {
  border-radius: 4px 4px 15px 15px;
  background-color: $sec-color;
  & > a {
    font-size: 26px;
    margin-left: 10px;
  }
}
.TextArea {
  min-height: 150px;
  max-height: 200px;
  border: 1px $blue-grey-3 solid;
}

.Mediums {
  background-color: #c4dfe6;
  padding: 4px;
  margin: 8px 0 0 0;
  border-radius: 6px;
}

.GenFormWrapper {
  border-radius: 12%;
  animation: fade 0.7s;

  & .StageWrapper {
    animation: fade 0.7s;
  }
}
.GenFormStyle {
  background-color: white;
  padding: 3px;
  border-radius: 5px;
  & .Error {
    font-weight: 400;
  }
  & .Alert {
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

  & .Section {
    justify-content: center;

    & > .Head {
      text-align: center;
      margin: auto;
      padding: 12px 16px;
      height: 40px;
      border-radius: 73% 73% 20% 20%;
      border-left: white double 10px;
      border-right: white double 10px;
      // text-shadow: 0px 1px 2px white;
      display: block;
      min-width: 130px;
      max-width: 80%;
      font-weight: 500;
      font-size: 18px;
      color: $pri-color;
      background-color: $sec-color;
    }
    & > input {
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
  }
}

@include xs-only {
  .GenFormStyle {
    & > div {
      & > .Head {
        min-width: 95%;
      }
    }
  }
}
</style>
