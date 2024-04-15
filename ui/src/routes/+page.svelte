<script lang="ts">
    import HttpMethod from "../utils/http.methods";
    const http = new HttpMethod();

    let data: string[] = [];

    async function getRecentCotation() {
        const url = "http://localhost:9001/api/v1/hello";
        const res = await http.get(url);
        data = [res.message];
    }
</script>

<h1>BID</h1>

{#await getRecentCotation()}
    Loading...
{:then}
    {#each data as item}
        {item}
    {/each}
{/await}

<h3>COTAÇÃO ATUAL</h3>

<h3>VALOR TOTAL</h3>

<h3>COTAÇÕES RECENTES</h3>

<h3>DATA/HORA</h3>

<h3>PEÇA</h3>

<h3>CLIENTE</h3>

<h3>STATUS</h3>

<h3>MATERIA PRIMA</h3>

<h3>AÇÕES</h3>

<h3>DESCRIÇÃO</h3>
<h3>LARGURA</h3>
<h3>COMPRIMENTO</h3>
<h3>ESPESSURA</h3>

<h3>PESO</h3>
<h3>VALOR KG</h3>

<h3>MARGEM DE LUCRO</h3>

<h3>MÁQUINAS</h3>
