<template>
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" >
          <template slot="no" slot-scope="data">
            <strong></strong>
          </template>
          <template slot="firstname" slot-scope="data">
            <strong>{{data.item.first_name}}</strong>
          </template>
          <template slot="lastname" slot-scope="data">
            <strong>{{data.item.last_name}}</strong>
          </template>
          <template slot="email" slot-scope="data">
            <strong>{{data.item.email}}</strong>
          </template>
          <template slot="phone" slot-scope="data">
            <strong>{{data.item.phone}}</strong>
          </template>
          <template slot="action" slot-scope="data">
             <b-row>
          <!-- <b-button class="ml-sm-2" type="submit" size="sm" variant="primary" v-on:click="editClicked(data.item._id)"><i class="fa fa-edit"></i> Edit</b-button> -->
          <b-button class="ml-sm-2" type="submit" size="sm" variant="danger" v-on:click="ondelete(data.item._id)"><i class="fa fa-trash"></i> delete</b-button>
        </b-row>
          </template>
          <template slot="status" slot-scope="data">
            <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
          </template>
        </b-table>
        <nav>
          <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-card>
      </transition>
    </b-col>
  </b-row>
</template>

<script>
import usersData from './UsersData'
export default {
  name: 'Users',
  props: {
    caption: {
      type: String,
      default: 'Users'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
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
        {key: 'no'},
        {key: 'firstname'},
        {key: 'lastname'},
        {key: 'email'},
        {key: 'phone'},
        {key: 'action'},
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      i:0
    }
  },
  created:function(){
    this.init();
  },
  methods: {
    init(){
       this.$http.get("http://localhost:3003/api/users").then(response => {
        this.items = response.body;
        //console.log(response.body)
      });
    },
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount (items) {
      return items.length
    },
    userLink (id) {
      return `users/${id}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item._id)
      this.$router.push({path: userLink})
    },
    ondelete(id) {
     // console.log(id);
      this.$http
        .delete("http://localhost:3003/api/user/" + id, {
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
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
