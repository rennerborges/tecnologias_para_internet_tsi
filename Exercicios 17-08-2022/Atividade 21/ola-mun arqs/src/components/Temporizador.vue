<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
        <Botao :desat='cronometroRodando' :play='true' @click="iniciar"/>
        <Botao :desat='!cronometroRodando' :play='false' @click="finalizar"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Cronometro from './Cronometro.vue';
    import Botao from './Botao.vue';

    export default defineComponent({
        name:'TemporizadorSim',
        emits:['aoTemporizadorFinalizado'],
        components:{ Cronometro, 
            Botao 
        },
        data(){
            return{  
                tempoEmSegundos:0, 
                cronometro:0, 
                cronometroRodando: false  
            }},
        methods: {
            iniciar(){ 
                this.cronometroRodando=true;
                // começar a contagem; 1 seg = 1000 ms
                this.cronometro = setInterval(() => { // setInterval é do javascript
                    this.tempoEmSegundos += 1}, 1000)
            },
            finalizar(){
                this.cronometroRodando=false;
                clearInterval(this.cronometro);
                this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
                this.tempoEmSegundos=0;
            }
        }
    })
</script>