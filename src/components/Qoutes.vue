<template>
    <div>
        <h2>QOUTES</h2>




        <div v-for="qoutes in qoutesList" v-bind:key="qoutes.id">
            <p>Qoute: <i>{{ qoutes.text }}</i></p>
            <p>Author: {{ qoutes.author }}</p>
        </div>
 
    </div>
</template>

<script>


export default {
    data(){
        return {
            qoutesList: [],
            randomQoute: ''
        }
    },
    // FETCH JSON FROM API
    mounted(){
    fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(data => (this.qoutesList = data))
            .catch(err => {
                console.error(err);
            });
    },

    
}   
</script>