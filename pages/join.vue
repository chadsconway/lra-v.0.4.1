<template>
	<b-container>
		<div class="bluebg"></div>
			<b-container>
				<b-row align-h="center">
					<b-col sm="10" md="8" lg="6">
						<div class="outerlimits">
					<form v-on:submit.prevent="tempsend">
						<input
							type="hidden"
							name="subject"
							value="Request to begin Living Rosary Apostolate Devotion"
						/>
						<!-- Nested Name Group & email -->
						<!-- First name -->
						<b-form-group
							label-class="text-white"
							label-cols-lg="3"
							label=" First Name:"
							label-for="input-2"
						>
							<b-form-input
								id="input-2"
								v-model="firstname"
								required
								name="firstname"
								value=""
							></b-form-input>
						</b-form-group>
						<!-- Last name -->
						<b-form-group label-class="text-white" 
							label-cols-lg="3"
							label="Last Name:"
							label-for="input-3"
						>
							<b-form-input
								id="input-3"
								v-model="lastname"
								required
								name="lastname"
								value=""
							></b-form-input>
						</b-form-group>
						<!-- Email -->
						<b-form-group label-class="text-white" 
							label-cols-sm="3"
							id="input-group-1"
							label="Email address:"
							label-for="input-1"
						>
							<b-form-input
								id="input-1"
								v-model="email"
								type="email"
								required
								name="_replyto"
								value=""
							></b-form-input>
						</b-form-group>
						<!-- Mailing address -->
						<b-form-group label-class="text-white" 
							label-cols-sm="3"
							label="Mailing Address:"
							label-for="mailaddress"
						>
							<b-form-input
								id="mailaddress"
								v-model="mailaddress"
								required
								name="mailaddress"
								value=""
							>
							</b-form-input>
						</b-form-group>
						<!-- City -->
						<b-form-group label-class="text-white"  label-cols-sm="3" label="City:" label-for="city">
							<b-form-input
								id="city"
								v-model="city"
								required
								name="city"
								value=""
							>
							</b-form-input>
						</b-form-group>
						<!-- Zipcode -->
						<b-form-group label-class="text-white" 
							label-cols-sm="3"
							label="Zipcode:"
							label-for="zipcode"
						>
							<b-form-input
								id="zipcode"
								v-model="zipcode"
								required
								name="zipcode"
								value=""
							>
							</b-form-input>
						</b-form-group>
					<!-- Phone number -->
						<b-form-group label-class="text-white" 
							label-cols-sm="3"
						label="Phone number:" label-for="phonenumber">
								<b-form-input
									id="phonenumber"
									v-model="phonenumber"
									required
									placeholder=""
									name="phonenumber"
									value=""
								>
								</b-form-input>
							</b-form-group>
						<!-- Country -->
						<b-form-group label-class="text-white" 
							label-cols-sm="3"
							label="Country of Residence:"
							label-for="country"
						>
							<div id="dh-input-wrap">
								<country-select
									style="display:block;"
									className="form-control"
									v-model="country"
									:country="country"
									required
									name="Country"
									countryName
									value=""
								></country-select>
							</div>
						</b-form-group>
						<!-- Region -->
						<b-form-group label-class="text-white" 
							label-cols-sm="3"
							label="Region of Residence:"
							label-for="region"
						>
							<region-select
								className="form-control"
								v-model="region"
								:country="country"
								:region="region"
								countryName
								regionName
								required
								value=""
							>
							</region-select
						></b-form-group>

						<b-form-group label-class="text-white"  id="input-group-5">
							<b-form-checkbox-group v-model="checked" id="checkboxes-5">
								<b-form-checkbox
									value="Please send me information so I may join in praying This Living Rosary Devotion!"
									name="join"
									>Please send me information so I may join in praying This
									Living Rosary Devotion!</b-form-checkbox
								>
							</b-form-checkbox-group>
						</b-form-group>
						<!-- Optional note -->
						<b-form-textarea
							id="note"
							v-model="note"
							placeholder="(optional) Write a personalized note..."
							rows="3"
							max-rows="6"
							name="note"
							value=""
						></b-form-textarea>
						<!-- Submit -->
						<b-button-group class="p-3">
						<b-button class="btn btn-lg" type="submit" variant="primary" value="Send">
							Submit
						</b-button>
						<b-button class="btn btn-lg" type="reset" variant="danger">Reset</b-button>
						</b-button-group>
					</form>
					</div>
				</b-form-group>
				</b-col>
				</b-row>
			
			</b-container>
				<theme-colors />
		
	</b-container>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	import themeColors from '@/components/theme-colors.vue';
	export default Vue.extend({
		data() {
			return {
				country: '',
				region: '',
				email: '',
				firstname: '',
				lastname: '',
				mailaddress: '',
				city: '',
				zipcode: '',
				phonenumber: '',
				country: '',
				region: '',
				note: '',
				checked: [],
				sendto: '',
				show: true
			};
		},
		transition: {
			duration: 500,
			enterActiveClass: 'animated slideInUp',
			leaveActiveClass: 'animated slideOutDown'
		},
		components: {
			themeColors
		},
		methods: {
			tempsend: function(evt) {
				console.log({
					country: this.country,
					region: this.region,
					email: this.email,
					zipcode: this.zipcode,
					phonenumber: this.phonenumber,
					firstname: this.firstname,
					lastname: this.lastname,
					mailaddress: this.mailaddress,
					city: this.city,
					note: this.note,
					sendto: this.sendto
				});
			},
			onReset: function(evt) {
				evt.preventDefault();
				// Reset our form values
				this.form.email = '';
				this.form.firstName = '';
				this.form.lastName = '';
				this.form.note = '';
				this.form.country = '';
				this.form.zipcode = '';
				this.form.region = '';
				this.form.checked = [];
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
			}
		}
	});
</script>
<style scoped>

	.outerlimits {
		background-color: rgba(10,10,10,0.5);
		padding: 20px;
		z-index:1;
	}
	.bluebg {
		position: absolute;
		top: -40px;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 0;
		background-image: url('/img/rosaryborder.png');
		filter: blur(8px);
		-webkit-filter: blur(8px);
		width: 100vw;
		min-height: 100vh;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	b-container {
		position: absolute;
		z-index: 2;
		overflow-y: scroll;
	}
	b-col {
		padding-top: 5px;
	}
	.l5 {
		background-color: #ebffff;
	}
	.l4 {
		background-color: #bcfffe;
	}
	.l3 {
		background-color: #78fffd;
	}
	.l2 {
		background-color: #35fffc;
	}
	.l1 {
		background-color: #00f1ed;
	}
	.w3 {
		background-color: #00aba9;
	}
	.d1 {
		background-color: #009c99;
	}
	.d2 {
		background-color: #008b88;
	}
	.d3 {
		background-color: #007977;
	}
	.d4 {
		background-color: #006866;
	}
	.d5 {
		background-color: #005755;
	}

	.gradient1 {
		color: #fff;
		background-image: linear-gradient(to right, #007977, #005755);
	}

</style>
