<template>
  <div class="svgarea">
    <svg width="800" height="400" viewBox="0 0 800 400"
      @mouseleave="moveend"
      @mousemove="over"
      @mouseup="moveend"
    >
      <g
        @mousedown="movestart"
      >
        <rect class="rect1" width="240" height="80" rx="8" ry="8" x="0" y="0"></rect>
        <g>
          <text class="header_title" text-anchor="middle" x="120" y="20">mst_role</text>
        </g>
        <g>
          <g>
            <text class="primary_key" text-anchor="start" x="10"  y="50">id</text>
            <text text-anchor="stop"  x="120" y="50">INTEGER</text>
            <text class="right-edge"  text-anchor="stop"  x="230" y="50">|</text>
          </g>

          <g>
            <text text-anchor="start" x="10"  y="70">name</text>
            <text text-anchor="stop"  x="120" y="70">VARCHAR(30)</text>
            <text class="right-edge"  text-anchor="stop"  x="230" y="70">|</text>
          </g>

        </g>
      </g>

      <g
        @mousedown="movestart"
      >
        <rect class="rect2" width="240" height="80" rx="8" ry="8" x="0" y="0"></rect>
        <g>
          <text class="header_title" text-anchor="middle" x="120" y="20">role</text>
        </g>
        <g>
          <g>
            <text class="primary_key" text-anchor="start" x="10"  y="50">role_id</text>
            <text text-anchor="stop"  x="120" y="50">INTEGER</text>
            <text class="right-edge"  text-anchor="stop"  x="230" y="50">|</text>
          </g>

          <g>
            <text class="primary_key" text-anchor="start" x="10"  y="70">user_id</text>
            <text text-anchor="stop"  x="120" y="70">INTEGER</text>
            <text class="right-edge"  text-anchor="stop"  x="230" y="70">|</text>
          </g>

        </g>
      </g>

      <g
        @mousedown="movestart"
      >
        <rect class="rect1" width="200" height="120" rx="8" ry="8" x="0" y="0"></rect>
        <g>
          <text class="header_title" text-anchor="middle" x="100" y="20">mst_user</text>
        </g>
        <g>
          <g>
            <text class="primary_key" text-anchor="start" x="10" y="50">id</text>
            <text class="right-edge"  text-anchor="stop"  x="190" y="50">|</text>
          </g>

          <g>
            <text text-anchor="start" x="10" y="70">name</text>
            <text class="right-edge"  text-anchor="stop"  x="190" y="70">|</text>
          </g>

          <g>
            <text text-anchor="start" x="10" y="90">mail</text>
            <text class="right-edge"  text-anchor="stop"  x="190" y="90">|</text>
          </g>

          <g>
            <text text-anchor="start" x="10" y="110">order</text>
            <text class="right-edge"  text-anchor="stop"  x="190" y="110">|</text>
          </g>

        </g>
      </g>

      <g>
        <path stroke="#5d4037" stroke-width="2" fill="none" d="M250,120 C300,120 300,200 350,200"/>
        <path stroke="#5d4037" stroke-width="2" fill="none" d="M600,180 C700,180 700,70 650,70"/>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SvgComponent extends Vue {
  private isMousedown!: bool;
  private view: any;
  private svg: any;
  private target: any;
  private targetgroup: any;
  private mousex: number;
  private mousey: number;
  private targetdx: number;
  private targetdy: number;

  constructor() {
    super()
    this.isMousedown = false
    this.mousex = 0
    this.mousey = 0
  }

  mounted() {
    console.log(this.$el)
    // keep svg element
    this.view = this.$el
    this.svg = this.$el.children[0]
  }

  private over(ev) {
    const dx = this.view.getBoundingClientRect().left
    const dy = this.view.getBoundingClientRect().top
    this.mousex = ev.clientX -dx
    this.mousey = ev.clientY -dy
    if (!this.isMousedown) {
      return
    }

    this.targetgroup.setAttribute('transform', `translate(${this.mousex - this.targetdx}, ${this.mousey - this.targetdy})`)
  }

  private move(ev) {
    console.log("move")
    console.log(ev)
  }

  private movestart(ev) {
    console.log("movestart")
    this.target = ev.target
    console.log(ev)
    console.log(ev.offsetX, ev.offsetY)
    this.targetgroup = ev.target.parentNode
    this.svg.appendChild(ev.target.parentNode)
    this.targetdx = ev.offsetX
    this.targetdy = ev.offsetY
    this.isMousedown = true
  }

  private moveend(ev) {
    console.log("moveend")
    this.isMousedown = false
    this.target = null
    this.targetgroup = null
  }
}
</script>

<style scoped>
rect{
  stroke-width: 5px;
  cursor: pointer;
  position: relative;
}

rect:hover{
  fill: #EFE;
}

.rect1{
  fill: white;
  stroke: #793;
}

.rect2{
  fill: white;
  stroke: #F93;
}
.svgarea {
  border: 1px solid #000;
  width: 800px;
  height: 400px;
}

.primary_key {
  font-weight: bolder;
  fill: #424242;
}

.header_title {
  font-weight: bolder;
  fill: #b0bec5;
}

.right-edge {
  font-weight: bolder;
}

.eye-outer{
  fill: white;
  stroke: #793;
  stroke-width: 5px;
}

text{
  fill: #616161;
  font-weight: 100;
  cursor: pointer;
  pointer-events: none;
}

.eye-inner{
  fill: #793;
}
</style>

