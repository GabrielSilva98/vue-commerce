<template>
  <div>
      <NavbarAdmin />
      <b-container class="mt4" fluid>
          <b-table busy="busy" bordered :fields="fields" hover :items="products">
              
          </b-table>
      </b-container>
  </div>
</template>

<script>
import db from '@/firebase/firebase'
import NavbarAdmin from '@/components/NavbarAdmin'

export default {
    name: 'Admin',
    components: { NavbarAdmin },
    data: () => ({
        busy: true,
        items: [],
        products: null,
        fields: [
            {
                key: 'products', label: 'Sales'
            },
            {
                key: 'total', label: 'Total'
            },
            {
                key: 'delete', label: 'Delete'
            }
        ]
    }),
    created(){
        db.collection('vue').get()
            .then(snapshot => {
                this.item = []
                this.busy = true
                snapshot.forEach(doc => {
                    console.log(doc.data())
                    this.items = doc.data()
                    this.products = this.items.product
                    this.busy = false
                })
            })
    },
    methods: {
        deleteSale(id){
            db.collection('vue').doc(id).delete()
                .then(() => {

                })
        }
    }
}
</script>

<style>

</style>