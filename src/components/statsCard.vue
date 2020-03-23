<template>
  <div class="stats" :style="{background: $vuetify.theme.themes[theme].header}">
    <v-icon :class="type">{{ icon }}</v-icon>
    <p class="stats-count">{{ count }}</p>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'danger',
    },
  },
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    },
  },
};
</script>

<style lang="scss" scoped>
  .stats {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    p {
      margin: 10px 0;
      opacity: 0.8;
    }

    p:last-child {
      font-size: 0.95rem;
    }

    &-count {
      font-size: 1.3rem;
      font-weight: bold;
      font-family: 'Bitter', serif;
    }

    i {
      width: 50px;
      margin: 0 auto;
      height: 50px;
      font-size: 1.8rem;
      border-radius: 50%;
      text-align: center;

      &.infected {
        color: #00CFE8;
        background-color: rgba(0, 207, 232, 0.2);
      }

      &.deaths {
        color: #cf270a;
        background-color: rgba(207, 40, 10, 0.2);
      }

      &.recovered {
        color: #28C76F;
        background-color: rgba(40, 199, 111, 0.2);
      }
    }
  }
</style>
