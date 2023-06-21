<template>
  <div class="Gallery img-masked-00 flex wrap j-c-center px-3 noselect">
    <transition name="slide-down-fade">
      <div v-if="showPc" class="Pc xs12 sm6 md5 m-1">
        <img
          class="shadow-5"
          :src="'/defaults/gal/' + galImageList[activeGal].pc + '.jpg'"
          alt="orbrift.com"
          draggable="false"
        />

        <div v-if="showTablet" ref="Tablet" class="Tablet">
          <img
            class="shadow-5"
            :src="'/defaults/gal/' + galImageList[activeGal].tablet + '.jpg'"
            alt="orbrift.com"
            draggable="false"
          />
        </div>

        <div v-if="showPhone" ref="Phone" class="Phone">
          <img
            class="shadow-5"
            :src="'/defaults/gal/' + galImageList[activeGal].phone + '.jpg'"
            alt="orbrift.com"
            draggable="false"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    /* Properties */
    const showPc = ref(false);
    const showTablet = ref(false);
    const showPhone = ref(false);
    const activeGal = ref(-1);

    const interval: Ref<TimerHandler | null> = ref(null); //holds the setInterval timer

    //  proj gallery
    const galImageList = [
      { pc: "1", tablet: "2", phone: "3" },
      { pc: "4", tablet: "5", phone: "6" },
      { pc: "7", tablet: "8", phone: "9" },
      { pc: "10", tablet: "11", phone: "12" },
      { pc: "13", tablet: "14", phone: "15" },
      { pc: "16", tablet: "17", phone: "18" },
    ];

    const loopGallery = () => {
      activeGal.value++;
      if (activeGal.value > 5) {
        activeGal.value = 0;
      }
      showPc.value = true;

      setTimeout(() => {
        showTablet.value = true;
      }, 2000);
      setTimeout(() => {
        showPhone.value = true;
      }, 3000);
      setTimeout(() => {
        showPc.value = showPhone.value = showTablet.value = false;
      }, 7500);
    };

    onMounted(() => {
      loopGallery();
      interval.value = setInterval(() => {
        loopGallery();
      }, 8000);
    });

    onUnmounted(() => {
      if (interval) {
        clearInterval(interval.value);
      }
    });

    return {
      showPc,
      showTablet,
      showPhone,
      activeGal,
      interval,

      galImageList,
      loopGallery,
    };
  },
};
</script>

<style lang="scss" scoped>
.Gallery {
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  & .Thumb {
    min-height: 50px;
  }
  & .Pc {
    min-height: 250px;
    position: relative;
    top: 0;
    // max-width: 1000px;
    max-height: 600px;
    overflow: hidden;
    animation: pc 1s;
  }
  .Pc,
  .Tablet,
  .Phone {
    & img {
      width: 100%;
      min-height: 100%;
    }
    border-radius: 6px;
    border: solid $sec-color-trans 4px;
    border-bottom: solid $sec-color-trans 15px;
  }
  .Tablet,
  .Phone {
    position: absolute;
    top: 20px;
    max-height: 90%;
    overflow: hidden;
    animation: mobiles 2s;
  }

  .Tablet {
    left: 5%;
    width: 30%;
  }
  .Phone {
    left: 45%;
    width: 19%;
  }
}

@include xs-only {
  .Gallery {
    & .Pc {
      min-height: 190px;
    }
  }
}
@include xxs-only {
  .Gallery {
    & .Pc {
      min-height: 150px;
    }
  }
}

@keyframes pc {
  from {
    top: 600px;
  }
  to {
    top: 0;
  }
}
@keyframes mobiles {
  from {
    top: 600px;
  }
  to {
    top: 20px;
  }
}
</style>
