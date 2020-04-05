<template>
  <div class="svgarea"
	>
    <svg width="400" height="400" 
			@mouseleave="moveend"
			@mousemove="over" 
		>
      <rect class="rect1" width="200" height="50" rx="8" ry="8" x="0" y="0"
				@mouseup="moveend" 
				@mousedown="movestart" 
			>
      </rect>
      <rect class="rect2" width="200" height="50" rx="8" ry="8" x="50" y="50"
				@mouseup="moveend" 
				@mousedown="movestart" 
			>
      </rect>
    </svg>
		<br/>
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

		this.target.setAttribute('x',this.mousex - this.targetdx)
		this.target.setAttribute('y',this.mousey - this.targetdy)
  }

  private move(ev) {
		console.log("move")
		console.log(ev)
  }
  private movestart(ev) {
		console.log("movestart")
		this.target = ev.target
		this.svg.appendChild(ev.target)
		console.log(this.target.style)
		this.targetdx = ev.offsetX
		this.targetdy = ev.offsetY
		this.isMousedown = true
  }
  private moveend(ev) {
		console.log("moveend")
		this.isMousedown = false
  }
}
</script>

<style scoped>
rect{
  stroke-width: 5px;
  cursor: pointer;
	z-index: 0;
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
	width: 400px;
	height: 400px;
}

.eye-outer{
  fill: white;
  stroke: #793;
  stroke-width: 5px;
}
text{
  cursor: pointer;
  pointer-events: none;
}

.eye-inner{
  fill: #793;
}
</style>

