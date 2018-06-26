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
      <input type="text" class="form-control " placeholder="account" v-model="userNameInput" v-on:keydown.enter="nameEnter">
      <div class="input-group-append ">
        <span class="btn btn-secondary " v-on:click="nameEnter">Search</span>
      </div>
    </div>
  </div>

	<img class="float-left" style="margin-top: -10px" :src="'https://robohash.org/'+account.name+'?size=55x55'" >
	<h3 class="float-left" style="margin-top: 10px;margin-left: 2px"> {{account.name}}</h3>


</div>

		  		<!-- account.effective_sp = Number(effective_sp.toFixed(0)).toLocaleString()
		  		account.vesting_shares_sp = vesting_shares * this.globalProperties.vestingValue
		  		account.received_vesting_shares_sp = received_vesting_shares * this.globalProperties.vestingValue
		  		account.delegated_vesting_shares_sp = delegated_vesting_shares * this.globalProperties.vestingValue -->



<div class="row">
          <div class="col-md-4">
            <div class="bs-component">
              <ul class="list-group">
              	<li class="list-group-item ">

					<h5 class="text-center"> {{account.effective_sp}} SP</h5>
					<div class="text-center text-muted font-weight-light2" style="margin-top:-10px"><small>{{toNumber(account.vesting_shares_sp)}} + {{toNumber(account.received_vesting_shares_sp)}} - {{toNumber(account.delegated_vesting_shares_sp)}}</small></div>

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
                		<div class="text-center">{{account.age}}</div>
                		<div class="text-center text-muted text-xs"><small>Age</small></div>
					</div>
                	<div class="col-md-6">
                		<div class="text-center">{{account.repu}}</div>
                		<div class="text-center text-muted"><small>Reputation</small></div>
                	</div>
                  
                </li>

              </ul>
            </div>
          </div>
          <div class="col-md-8">
            <div class="bs-component">

<div v-if="showSpinner" class="sk-spinner sk-spinner-pulse"></div>


              
            	<ul class="list-group" >
  <li class="list-group-item clearfix" v-for="(value, index) in history">


  	<div style="margin:-9px" v-if="value[1].op[0]=='vote'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='claim_reward_balance'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='account_witness_vote'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='feed_publish'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='curation_reward'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='transfer'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='transfer_to_vesting'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='delegate_vesting_shares'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='producer_reward'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='author_reward'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='custom_json'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='withdraw_vesting'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='fill_vesting_withdraw'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='account_witness_proxy'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='comment'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='comment_benefactor_reward'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='comment_options'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='pow'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='account_update'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='account_create'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>

  	<div style="margin:-9px" v-if="value[1].op[0]=='account_create_with_delegation'">
	    <span class="float-right">{{toStr5(value[1].trx_id)}}</span>
	    <div>ddd</div>
  	</div>



	    {{value[1].op[0]}}




  </li>
</ul>


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
      userName : '',
      userNameInput : '',
      showSpinner : false,
      globalProperties : {vestingValue:0},
      account:{name:''},
      history:[]
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

  	if(this.$route.path=='/account'){
  		this.userName = localStorage.getItem('accountName') || ''
  	}else{
  		this.userName = this.$route.params.id || ''
  		localStorage.setItem('accountName',this.userName)
  	}

  	console.log(this.userName)

    
	localStorage.setItem('topMenu','account')
    this.$store.commit('topMenu','account')


    this.getGlobalProperties();
  },

  methods: {

    getGlobalProperties(){

        this.$http.get(this.$apiserver + '/steem/cache')
        .then((result) => {
            this.globalProperties.time = result.data.time
            this.globalProperties.vestingValue =  result.data.vesting_value
          
          if(this.userName!==''){
            this.getAccounts()
          }

        })
        .catch(error => {
          console.log(error.response)
        });


    },

    nameEnter(){

    	this.userName = this.userNameInput
    	this.userNameInput = ''

    	localStorage.setItem('accountName',this.userName)
    	this.getAccounts()

    },


    getAccounts(){

	    this.showSpinner = true;


		this.$steem.api.getAccounts([this.userName], (err, result)=> {
		  	if(result){
		  		let account = result[0]

		  		let vesting_shares = parseFloat(account.vesting_shares)
		  		let received_vesting_shares = parseFloat(account.received_vesting_shares)
		  		let delegated_vesting_shares = parseFloat(account.delegated_vesting_shares)

		        let vesting = vesting_shares + received_vesting_shares - delegated_vesting_shares
		        let effective_sp = vesting * this.globalProperties.vestingValue


		  		account.effective_sp = Number(effective_sp.toFixed(0)).toLocaleString()
		  		account.vesting_shares_sp = vesting_shares * this.globalProperties.vestingValue
		  		account.received_vesting_shares_sp = received_vesting_shares * this.globalProperties.vestingValue
		  		account.delegated_vesting_shares_sp = delegated_vesting_shares * this.globalProperties.vestingValue


		        let now = new Date(this.globalProperties.time);
		        let createdTime = new Date(account.created);
		        let difference = now.getTime() - createdTime.getTime();
		        let calSecond = Math.floor(difference/1000);
		        let fromNowHour = calSecond/60/60;
		        let fromNowYear = fromNowHour/24/365;

		        account.age = fromNowYear.toFixed(1)
		        account.repu = this.$steem.formatter.reputation(account.reputation);


		  		// console.log(fromNowYear)


		  		this.account=account
		  	}

		  	this.showSpinner = false;
		});


		this.$steem.api.getAccountHistory(this.userName, -1, 100, (err, result) => {
			if(result){

				result.sort(function(a, b) {
                    return b[0] - a[0];
                });


				this.history = result
			}

			this.showSpinner = false;
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

          this.allUsers = data.data
          this.users = tmpList
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

    toStr5:function(val){
    	return val.substring(0,6)
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
