<template>
  <li class="nav-item bg-white border border-dark rounded p0">
    <a class="nav-link active text-dark pLR"
      ><router-link class="tdn" :to="pageURL">{{ pageName }}</router-link></a
    >
  </li>
</template>

<script>
export default {
  name: "ButtonSausage",
  props: ["pageURL", "pageName"],
};
</script>

<style>
li {
  margin-right: 6px;
}
.p0 {
  padding-left: 0;
  padding-right: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pLR {
  padding-left: 12px;
  padding-right: 12px;
}
.tdn {
  text-decoration: none;
  color: black;
}
.tdn:hover {
  text-decoration: none;
  color: black;
}
</style>