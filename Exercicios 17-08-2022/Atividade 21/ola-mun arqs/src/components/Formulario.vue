<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input 
                  type="text" 
                  class="input" 
                  placeholder="Qual tarefa você deseja iniciar?" 
                  v-model="descricao"
                  />
                <div class="collumn">
                    <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Temporizador from './Temporizador.vue';

    export default defineComponent({
        name:'FormulárioCad',
        emits:['aoSalvarTarefa'],
        components:{
            Temporizador// é um componente filho
        },
        data(){
            return {
                descricao: ''
            }
        },
        methods:{
            finalizarTarefa(tempoDecorrido:number) : void{
                this.$emit('aoSalvarTarefa', {
                    duracaoEmSegundos: tempoDecorrido,
                    descricao: this.descricao
                });
                console.log('tempo da tarefa', tempoDecorrido);
                console.log('descrição da tarefa', this.descricao);
                this.descricao='';
            }
        }
    })
</script>