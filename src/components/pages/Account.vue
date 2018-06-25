<template>

<div class="account container" >




<div class="clearfix " style="padding-top: 15px">
	<!-- <div class="form-group float-right">
      <div class="input-group ">
        <div class="">
          <input type="text" class="form-control " id="inputGroupFile02" placeholder="User Name" v-model="userName" v-on:keyup="nameKeyup" v-on:keydown.enter="nameEnter">
        </div>
        <div class="input-group-append">
          <span class="btn btn-secondary" id="" v-on:click="nameEnter">Search</span>
        </div>
      </div>
    </div> -->

  <div class="form-group float-right xs-invisible">
    <div class="input-group ">
      <input type="text" class="form-control " placeholder="account">
      <div class="input-group-append ">
        <span class="btn btn-secondary ">Search</span>
      </div>
    </div>
  </div>

	<img class="float-left" style="margin-top: -10px" src="https://robohash.org/koinbot?size=55x55" >
	<h3 class="float-left" style="margin-top: 10px;margin-left: 2px"> koinbot</h3>


</div>





<div class="row">
          <div class="col-md-4">
            <div class="bs-component">
              <ul class="list-group">
              	<li class="list-group-item ">

					<h5 class="text-center"> 35,000 SP</h5>
					<div class="text-center text-muted font-weight-light2" style="margin-top:-10px"><small>16</small></div>

                </li>

                <li class="list-group-item  ">
				    <div>
					    <div class="text-right">dasasdas</div>
					    <input type="range" class="slider" id="customRange1">
				    </div>
				    <div>
				    	<div class="text-right">dasasdas</div>
					    <div class="progress">
					      <div class="progress-bar progress-bar-striped progress-bar-animated bg-info bg-opacity8" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
					    </div>
				    </div>
                </li>
                
                <li class="list-group-item d-flex justify-content-between align-items-center">
                	<div class="col-md-6">
                		<div class="text-center">1</div>
                		<div class="text-center text-muted text-xs"><small>Age</small></div>
					</div>
                	<div class="col-md-6">
                		<div class="text-center">1</div>
                		<div class="text-center text-muted"><small>Reputation</small></div>
                	</div>
                  
                </li>

              </ul>
            </div>
          </div>
          <div class="col-md-8">
            <div class="bs-component">

<div v-if="showSpinner" class="sk-spinner sk-spinner-pulse"></div>


              
            	<div class="list-group">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small>Donec id elit non mi porta.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small class="text-muted">Donec id elit non mi porta.</small>
                </a>
              </div>


<div class="text-right"><small>Robots lovingly delivered by Robohash.org</small></div>


            </div>
          </div>
          
        </div>







<!-- 
<div>
  <nav aria-label="Page navigation example" style="margin-top:22px">
    <ul class="pagination justify-content-center">
      <li class="page-item"  v-for="(value, index) in pageList" v-bind:class="{ active: page==value }">
        <a class="page-link" v-on:click.prevent="pageClick(value)">{{value}}</a>
      </li>
    </ul>
  </nav>
</div> -->


<br/>



  </div>
</template>
<script>

var moment = require('moment');


export default {
  name: 'account',
  data () {
    return {
      allUsers : [],
      users : [],
      page : 1,
      pageList : [1,2,3,4,5],
      sortBy : 'total_steem',
      userName : '',
      showSpinner : false,
      globalProperties : {vestingValue:0},
      accountCount:{}
    }
  },
  computed: {
    // hasResult: function () {
    //   return this.posts.length > 0
    // }
  },

    mounted() {
    },

  created: function () {

    this.userName = this.$route.params.id || ''

	localStorage.setItem('topMenu','account')
    this.$store.commit('topMenu','account')

    this.sortBy = localStorage.getItem('sortBy') || 'total_steem'
    this.showSpinner = true;

    this.getGlobalProperties();
  },

  methods: {

    getGlobalProperties(){

        this.$http.get(this.$apiserver + '/steem/cache')
        .then((result) => {
            this.globalProperties.time = result.data.time
            this.globalProperties.vestingValue =  result.data.vesting_value
          
          if(this.userName!==''){
            this.nameEnter()
          }else{
            this.getUsers(1);
          }


        })
        .catch(error => {
          console.log(error.response)
        });


      this.$http.get(this.$apiserver+'/usercount')
        .then((result) => {
          this.accountCount=result.data
        })
        .catch(error => {
          console.log(error.response)
        });

    },

    getUsers: function (page) {

        let url = ''
        if(page===1){
          url = this.$apiserver+'/users?page=1&sort='+this.sortBy
        }else{

          let nexrOrPrev = this.page < page ? '/next' : '/prev'
          let targetUserName = ''



          if(nexrOrPrev=='/next'){

            let index  = (page-this.page)*15-1

            console.log(index)

            targetUserName = this.allUsers[index].name

          }else{
            targetUserName = this.allUsers[0].name
          }

          console.log(targetUserName)

          url = this.$apiserver+'/users/'+targetUserName+nexrOrPrev + '?sort='+this.sortBy
        }

        this.initPage(page)
        this.showSpinner = true;

        this.$http.get(url)
        .then((result) => {
          // console.log(result.data)
          this.createUsers(result.data);
          this.showSpinner = false;

        })
        .catch(error => {
          console.log(error.response)
          this.showSpinner = false;
        });

    },

    updateClick(name){
      this.$http.get(this.$apiserver+'/users/'+name + '?sort='+this.sortBy)
      .then((result) => {
            this.getUsers()
      })
      .catch(error => {
      });      
    },


    createUsers(data){

          let tmpList = [];

          for(let value of data.data){

            value.fromNow = moment(value.last_updated).fromNow();

            

            var tempimg = 'https://steemit-production-imageproxy-thumbnail.s3.amazonaws.com/U5ds8wePoj1V1DoRR4bzzKUARNiywjp_128x128';

            if(value.json_metadata==='' || value.json_metadata.length===2){
                value.profile_image = tempimg;
            }else{
                var json_metadata = JSON.parse(value.json_metadata);

                if(json_metadata.profile){


                  if(json_metadata.profile.profile_image){
                    json_metadata.profile.profile_image = json_metadata.profile.profile_image.replace(/http:/gi, "https:"); 
                    value.profile_image = json_metadata.profile.profile_image !== undefined? json_metadata.profile.profile_image : tempimg;
                  }

                  value.profile_image = json_metadata.profile.profile_image !== undefined? json_metadata.profile.profile_image : tempimg;

                  value.about = json_metadata.profile.about || ''
                }else{
                  value.profile_image = tempimg;
                }
            }

            value.reputation = value.num_reputation;

            value.witnessVotes = ''
            for(let wit of value.witness_votes){
              value.witnessVotes += '@' + wit + ' '
            }

            // let delegated_vesting_shares = parseFloat(value.delegated_vesting_shares);
            let vesting_shares = parseFloat(value.vesting_shares);
            // let received_vesting_shares = parseFloat(value.received_vesting_shares);
            value.sp = vesting_shares * this.globalProperties.vestingValue;
            value.proxy = value.proxy=='' ? '\"\"' : value.proxy
            value.proxied = (Number(value.proxied_vsf_votes[0])/1000000) * this.globalProperties.vestingValue
            value.proxied = Number(value.proxied.toFixed(0)).toLocaleString()

            value.lastVoteTime = this.fromNowDay(value.last_vote_time)

            if(tmpList.length<15){
              tmpList.push(value)
            }

            
          }

          console.log('c user finished')

          this.allUsers = data.data
          this.users = tmpList
    },

    imageLoadOnError(value){
      value.profile_image = 'https://steemit-production-imageproxy-thumbnail.s3.amazonaws.com/U5ds8wePoj1V1DoRR4bzzKUARNiywjp_128x128'
    },


    pageClick(value){
      this.getUsers(value)
    },

    preNextClick(value){
      if(value=='prev'){
        if(this.page > 1){
          this.page-=1
          this.getUsers(this.page)
        }
      }else{
        this.page+=1
        this.getUsers(this.page)
      }
    },

    sortByChange(){
      localStorage.setItem('sortBy',this.sortBy)

      console.log(this.userName.length)

      if(this.userName.length){
        this.nameEnter()
      }else{
        this.getUsers(1)
      }
      
      
    },

    nameKeyup(){
      console.log('keyup')
    },

    nameEnter(){

      if(this.userName==''){
        this.getUsers(1);

        return
      }


      this.showSpinner = true;
      this.$http.get(this.$apiserver+'/users/'+this.userName + '?sort='+this.sortBy)
      .then((result) => {
        if(result.data.message){
          console.log('show snack')
          this.$bus.$emit('showSnackbar', result.data.message)
        }

        this.showSpinner = false;
        this.initPage(result.data.page)
        this.createUsers(result.data)
      })
      .catch(error => {
        this.showSpinner = false;
      });   

    },

    initPage(page){
       if(page){
          this.page = page;
          this.createPageList(page)
        }

        $('html,body').scrollTop(0);



    },




    createPageList(value){
      if(value>2){
        this.pageList = []
        for(let i = 1; i>0; i--){
          this.pageList.push(value-i)
        }
        this.pageList.push(value)
        for(let i = 1; i<=3; i++){
          this.pageList.push(value+i)
        }
      }else{
        this.pageList = [1,2,3,4,5]
      }
    },

    fromNow(value){
      // let timestamp = moment(value).subtract(-9, 'hour').toDate();
      let fromNow = moment(value).fromNow();
      return fromNow
    },

    fromNowDay(value){

      let difference = new Date(this.globalProperties.time).getTime() - new Date(value).getTime()
      let calSecond = Math.floor(difference/1000)
      let fromNowMinute = calSecond/60
      let day = fromNowMinute / 1440;

      if(isNaN(day)){
        day = 9999
      }

      day = Number(day.toFixed(0))
      return day
    },


    toNumber(val){
      return Number(parseFloat(val).toFixed(0)).toLocaleString()
    },

    toLS(val){
      return Number(val).toLocaleString()
    },

    toB:function(val){
      return (Number(val)/1000000000).toFixed(1)
    },

    toFixed1:function(val){
      return Number(val).toFixed(1)
    },

    toFixed0:function(val){
      return Number(val).toFixed(0)
    },

    chageColor:function(val){
      let text = 'text-blue'
      if(Number(val) < 0)
        text = 'text-red'
      return text
    }



  }
}
</script>

<style scoped>
</style>
