<template>
    <button class="button" :disabled="desat">
        <span class="icon">
            <i v-if="play" class="fas fa-play"></i>
            <i v-else class="fas fa-stop"></i>            
        </span>

        <span v-if="play">Play</span>
        <span v-else>Stop</span>
    </button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name:'Botao-w',
        props:{//propriedades que vamos receber no componente
            desat: { type: Boolean},
            play: { type: Boolean}
        }

    })
</script>