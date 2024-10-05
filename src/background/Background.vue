<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  import fragmentShaderSource from './fragment';

  const canvas = ref();
  const gl = ref();
  const shaderProgram = ref();

  onMounted(() => {
    gl.value = canvas.value?.getContext('webgl');
    if (!gl.value) {
      console.error('WebGL not supported');
      return;
    }
    // Initialize shaders and start animation loop
    setupShaders();
    animate();
  });

  const stopAnimation = ref(false);
  onBeforeUnmount(() => {
    stopAnimation.value = true;
  });

  function setupShaders() {
    const vertexShaderSource = `
    attribute vec4 aVertexPosition;
    void main(void) {
      gl_Position = aVertexPosition;
    }
  `;

    const compileShader = (source, type) => {
      const shader = gl.value.createShader(type);
      gl.value.shaderSource(shader, source);
      gl.value.compileShader(shader);
      if (!gl.value.getShaderParameter(shader, gl.value.COMPILE_STATUS)) {
        console.error(gl.value.getShaderInfoLog(shader));
        gl.value.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.value.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.value.FRAGMENT_SHADER);

    shaderProgram.value = createShaderProgram(vertexShader, fragmentShader);
    gl.value.useProgram(shaderProgram.value);

    initBuffers();
  }

  function createShaderProgram(vertex, fragment) {
    const program = gl.value.createProgram();
    gl.value.attachShader(program, vertex);
    gl.value.attachShader(program, fragment);
    gl.value.linkProgram(program);
    if (!gl.value.getProgramParameter(program, gl.value.LINK_STATUS)) {
      console.error(gl.value.getProgramInfoLog(program));
      return null;
    }
    return program;
  }

  function initBuffers() {
    const vertices = new Float32Array([
      -1.0, -1.0,
      1.0, -1.0,
      1.0, 1.0,
      -1.0, 1.0,
    ]);

    const indices = new Uint16Array([0, 1, 2, 0, 2, 3]);

    const vertexBuffer = gl.value.createBuffer();
    gl.value.bindBuffer(gl.value.ARRAY_BUFFER, vertexBuffer);
    gl.value.bufferData(gl.value.ARRAY_BUFFER, vertices, gl.value.STATIC_DRAW);

    const indexBuffer = gl.value.createBuffer();
    gl.value.bindBuffer(gl.value.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.value.bufferData(gl.value.ELEMENT_ARRAY_BUFFER, indices, gl.value.STATIC_DRAW);

    const aVertexPosition = gl.value.getAttribLocation(shaderProgram.value, 'aVertexPosition');
    gl.value.enableVertexAttribArray(aVertexPosition);
    gl.value.vertexAttribPointer(aVertexPosition, 2, gl.value.FLOAT, false, 0, 0);
  }

  function resizeCanvas() {
    const displayWidth = canvas.value.clientWidth;
    const displayHeight = canvas.value.clientHeight;
    if (canvas.value.width !== displayWidth || canvas.value.height !== displayHeight) {
      canvas.value.width = displayWidth;
      canvas.value.height = displayHeight;
      gl.value.viewport(0, 0, gl.value.drawingBufferWidth, gl.value.drawingBufferHeight);
    }
  };

  function animate() {
    const iTime = gl.value.getUniformLocation(shaderProgram.value, 'iTime');
    const iResolution = gl.value.getUniformLocation(shaderProgram.value, 'iResolution');

    const loop = (time) => {
      // Prevents a bunch of errors on login
      if (stopAnimation.value) return;

      resizeCanvas();
      gl.value.clear(gl.value.COLOR_BUFFER_BIT);

      gl.value.uniform1f(iTime, time * 0.001);
      // gl.value.uniform2f(iResolution, gl.value.drawingBufferWidth, gl.value.drawingBufferHeight);
      gl.value.uniform2f(iResolution, canvas.value?.width, canvas.value?.height);

      gl.value.drawElements(gl.value.TRIANGLES, 6, gl.value.UNSIGNED_SHORT, 0);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
</script>

<style scoped lang="scss">
  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
</style>
