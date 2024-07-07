<script setup>
import { useRouter } from "vue-router";
import Button from "../../../shared/ui/Button/index.vue";

const router = useRouter();

async function navigateToStart() {
  await router.push("/3d");
}

function navigateToAbout() {
  router.push("/about");
}

function handleClick() {
  alert("Button clicked!");
}
</script>

<template>
  <main class="screen">
    <h1 class="screen__heading">Hello, This is my 3D Physics Project</h1>
    <p class="screen__paragraph">
      It was created in order to develop my skills of 3D in Web Development
    </p>
    <Button
      text="Start"
      margin="clamp(16px,1.66656vw,64px)"
      :onClick="navigateToStart"
    />
    <Button
      text="About Me"
      margin="clamp(8px,0.83328vw,32px)"
      :onClick="navigateToAbout"
    />
    <p class="screen__second_paragraph">
      Also it's my first project made with VueJS
    </p>
  </main>
</template>

<style lang="scss" scoped>
.screen {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__heading {
    font-size: clamp(32px, 3.33312vw, 128px);
  }

  &__paragraph {
    color: #e54f6d;
    margin-top: clamp(8px, 0.83328vw, 32px);
    font-size: clamp(16px, 1.66656vw, 64px);
  }

  &__second_paragraph {
    color: #724e91;
    margin-top: clamp(8px, 0.83328vw, 32px);
    font-size: clamp(8px, 0.83328vw, 32px);
  }
}
</style>
