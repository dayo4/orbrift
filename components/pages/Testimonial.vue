<template>
  <section class="TST Masked-bg-img flex flex-wrap justify-center my-3 select-none">
    <div id="ContRef" ref="ContRef" class="ContRef flex basis-full sm:basis-11/12 md:basis-10/12 lg:basis-7/12">
      <div class="Item" v-for="(item, i) in TSTList" :key="i">
        <h3>{{ item.name }}</h3>
        <h5>{{ item.info }}</h5>
        <p>
          {{ item.msg }}
        </p>
        <i class="TopHandle"></i>
        <i class="BottomHandle"></i>
      </div>
    </div>
    <i @click="TSTclickLeft" class="LeftBtn icon-left"></i>
    <i @click="TSTclickRight" class="RightBtn icon-right"></i>
  </section>
</template>

<script lang="ts">
export default {
  setup() {
    /* Element Refs */
    const ContRef: Ref<HTMLElement | null> = ref(null);

    /* Properties */
    const TSTList = [
      {
        name: "Isaac Olajide",
        info: "ceo - Iradux Printing",
        msg: "It's such a great work you did on our website with amazing designs and simple pages setup. Our customers feedback on it is satisfactory. Keep up the good job.",
      },
      {
        name: "Mercy Oni",
        info: "Graphics designer",
        msg: "I really love the the impressive custom design of my porfolio and the user-friendliness. It has really made it easy for me to engage clients. I'm glad you were recommended to me.",
      },
      {
        name: "Timothy Williams",
        info: "Lead Software Developer",
        msg: "It was good to have you as part of our project team. You did a splendid work managing our NodeJs backend - all APIs and micro services were incredibly implemented.",
      },
      {
        name: "Tony Nathaniel",
        info: "ceo, ENK - product branding company",
        msg: "Just wanted to say you have been very helpful to my business with the recent pages redesign and new features implemented. Doing business has never been so easy and efficient.",
      },
    ];

    const TSTclickLeft = () => {
      ContRef.value?.scrollBy({
        left: -ContRef.value?.children[0].clientWidth,
        behavior: "smooth",
      });
    };

    const TSTclickRight = () => {
      ContRef.value?.scrollBy({
        left: ContRef.value.children[0].clientWidth,
        behavior: "smooth",
      });
    };

    return {
      ContRef,

      TSTList,

      TSTclickLeft,
      TSTclickRight,
    };
  },
};
</script>

<style lang="scss" scoped>
.TST {
  position: relative;
  max-width: 100vw;
  overflow-y: hidden;
  margin-bottom: 50px;
  background-color: $sec-color;
  background-attachment: fixed;
  background-image: url("/defaults/pgs/orbrift_web_developer2.jpg");
  &::after {
    background-color: rgba(72, 72, 72, 0.85);
  }

  & .LeftBtn,
  .RightBtn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 45%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 20px;
    font-weight: bolder;
    color: $pri-color;
    cursor: pointer;
    background-color: rgba(53, 51, 51, 0.507);
  }
  & .LeftBtn:active,
  .RightBtn:active {
    background-color: rgba(53, 51, 51, 0.253);
  }
  & .LeftBtn {
    left: 3%;
  }
  & .RightBtn {
    right: 5%;
  }
}
.ContRef {
  position: relative;
  padding: 10px 50px 40px 50px;
  // border-left: solid 2px $cyan;
  border-radius: 12px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;
  overscroll-behavior-x: contain;
  transform: translateY(20px);

  & .Item {
    position: relative;
    min-width: 400px;
    padding: 5px 20px;
    text-align: center;
    margin: 20px;
    border-radius: 12px;
    border-top: solid 2px $sec-color-trans;
    border-bottom: solid 2px $sec-color-trans;
    scroll-snap-align: center;
    background-color: white;

    & .TopHandle,
    .BottomHandle {
      position: absolute;
      left: 50%;
      margin-left: -60px;
      width: 120px;
      height: 20px;
      background-color: $light-color;
      border-left: solid 2px $sec-color-trans;
      border-right: solid 2px $sec-color-trans;
    }
    & .TopHandle {
      top: -20px;
      border-radius: 28px 28px 0px 0px;
      border-top: solid 2px $sec-color-trans;
      border-left: solid 2px $sec-color-trans;
      border-right: solid 2px $sec-color-trans;
    }
    & .BottomHandle {
      bottom: -20px;
      border-radius: 0px 0px 28px 28px;
      border-bottom: solid 2px $sec-color-trans;
      border-left: solid 2px $sec-color-trans;
      border-right: solid 2px $sec-color-trans;
    }
  }
}

@include sm-and-down {
  .ContRef {
    & .Item {
      min-width: 300px;
    }
  }
}

@include xs-only {
  .ContRef {
    & .Item {
      min-width: 220px;
    }
  }
}
</style>
