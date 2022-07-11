<template>
    <div>
        <h1>Contador (Classe)</h1>
        <h2>{{ valor }}</h2>
        <button @click="setValor(-1)">Dec</button>
        <button @click="setValor(1)">Inc</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Contador extends Vue {
    @Prop(Number)
    private readonly valorInicial?: number;

    private valor: number = this.valorInicial || 0;

    public setValor(delta: number) {
        console.log(this.valorInicial);
        this.valor += delta;
    }
}
</script>
