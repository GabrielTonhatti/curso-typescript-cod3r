<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1>Contador</h1>
        <h2>{{ valor }}</h2>
        <button @click="setValor(-1)">Desc</button>
        <button @click="setValor(1)">Inc</button>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        valorInicial: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            valor: this.valorInicial,
        };
    },
    methods: {
        setValor(delta: number) {
            this.valor += delta;
        }
    }
});

</script> >
