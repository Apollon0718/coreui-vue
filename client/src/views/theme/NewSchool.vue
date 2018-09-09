<template>
  
  <b-card :header="caption">
    <label class="mr-sm-2" for="inlineInput1">School Name: </label>            
    <select v-model="schoolname" class = "col-sm-12 mb-sm-2" v-on:change="fetchProductData">
      <option v-for="name in names" >{{name}}</option>
    </select><br>
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items,i" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <!-- <template slot="status" slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
      </template> -->
      <template slot="no" slot-scope="data">
        <strong></strong>
      </template>
      <template slot="action" slot-scope="data">
        <b-row>
          <b-button class="ml-sm-2" type="submit" size="sm" variant="primary" v-on:click="editClicked(data.item._id)"><i class="fa fa-edit"></i> Edit</b-button>
          <b-button class="ml-sm-2" type="submit" size="sm" variant="danger" v-on:click="ondelete(data.item._id)"><i class="fa fa-trash"></i> delete</b-button>
        </b-row>
      </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
</template>

<script>
/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
// const shuffleArray = array => {
//   for (let i = array.length - 1; i > 0; i--) {
//     for (let j = i-1; j > 0; j--){
//       if(array[i].week < array[j].week){
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }}
//   return array;
// }};

export default {
  name: "newschool",
  props: {
    caption: {
      type: String,
      default: "Table"
    },
    hover: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      items: [],
      fields: [
        { key: "no" },
        { key: "schoolname" },
        { key: "year" },
        { key: "month" },
        { key: "week" },
        { key: "elect_eur" },
        { key: "elect_kwh" },
        { key: "heating_eur" },
        { key: "heating_kwh" },
        { key: "water_eur" },
        { key: "water_litres" },
        { key: "action" }
      ],
      currentPage: 1,
      perPage: 10,
      totalRows: 0,
      names:[],
      schoolname:""
    };
  },
  created: function(){
    this.getname()
  },

  // changed: function() {
  //   this.fetchProductData()
    
  // },
  methods: {
    fetchProductData: function() {
      this.$http.get("http://localhost:3003/api/contacts").then(response => {
        this.items = [];
        console.log(response.body[1].schoolname)
        for (var i = 0; i <= response.body.length; i++) {
            if(this.schoolname == response.body[i].schoolname){
            this.items.push(response.body[i]);
            }
        }
        
      });
    },
    getname(){
      this.$http.get("http://localhost:3003/api/names").then(response => {
        for (var i = 0; i <= response.body.length; i++) {
            this.names.push(response.body[i]["name"]);

            }
          }
        // console.log(response.body)
      )
    },
    Link(id) {
      return `editschooldata/${id}`;
    },
    editClicked(item) {
      //console.log(item)
      const Link = this.Link(item);
      this.$router.push({ path: Link });
    },
    getBadge(status) {
      return status === "Active"
        ? "success"
        : status === "Inactive"
          ? "secondary"
          : status === "Pending"
            ? "warning"
            : status === "Banned" ? "danger" : "primary";
    },
    getRowCount(items) {
      return items.length;
    },
    ondelete(id) {
      console.log(id);
      this.$http
        .delete("http://localhost:3003/api/contact/" + id, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          for (var i = 0; i <= this.items.length; i++) {
            if (this.items[i]["_id"] == id) {
              this.items.splice(i, 1);
              break;
            }
          }
          //this.$router.push({path: '/schooldata'})
        });
    }
  }
};
</script>
