<template>
<div>
    <div class="space">
        <b-row>
            <h5>Nombre Usuario</h5>
        </b-row>
        <b-row>
            <div>
                <b-button variant="success" v-on:click="edit">Add</b-button>
            </div>
        </b-row>
    </div>
<div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Módulo 1" active>
        <b-table striped hover :items="items"></b-table>
      </b-tab>
      <b-tab title="Módulo 2">
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div> 
</div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'DocsVisualize',
        data: function() {
            return {
                items: [
                { Document_Name: '', Expiration_Date: '', Active: '', Visualize: 'link'  }
                ]
            }
        },
        getDocs: function(){
            this.username = this.$route.params.username
            let self = this
            axios.get("https://japichip-api.herokuapp.com/docs/"+this.username)
                .then((result) => {
                    self.Document_Name = result.data.Document_Name
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });
        },
        methods:{

            edit(){
                this.$router.push("/edit")
            }

        }
    }
</script>
<style>
.space{
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /*background-color: blue;*/
}
</style>