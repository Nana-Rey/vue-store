<template>


  <v-card
    class="mx-auto">
   <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols ="card.flex"
        >
        
          <v-card>
            <v-img
              :src="card.src"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            <v-card-actions>
              <v-spacer></v-spacer>
               </v-card-actions>
                 </v-img>
          <v-btn
      depressed
      color="primary"
    >
      購入
    </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
     
  cards:[{ id:1,title:"1",price:500,src: 'https://source.unsplash.com/1600x900/?food,yellow', flex: 6 },
  { id:2,title:"2",price:600,src: 'https://source.unsplash.com/1600x900/?food,red', flex: 6 },
  { id:3,title:"3",price:700,src: 'https://source.unsplash.com/1600x900/?food,green', flex: 6 },
  { id:4,title:"4",price:800,src: 'https://source.unsplash.com/1600x900/?food,orange', flex: 6 },

      
   ], }),
  }
</script>



