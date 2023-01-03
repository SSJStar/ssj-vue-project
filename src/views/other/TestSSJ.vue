<template>
  <div>
    <p>1</p>
    <p>2</p>
    <p class="sticky">position: sticky;</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
  </div>
</template>

<style>
div {
  height: 200px;
  position: relative;
}
p {
  width: 100%;
  height: 50px;
  margin: 0;
  text-align: center;
  line-height: 50px;
  background-color: #ccc;
}
p.sticky {
  background-color: blue;
  position: sticky;
  top: 0px;
}
</style>
