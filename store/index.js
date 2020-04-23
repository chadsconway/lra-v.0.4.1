process.env.DEBUG = true;
process.env.DEBUG_URL = 'http://localhost:9000';
process.env.TESTING = false;
process.env.TESTING_URL = 'http://1086.live/testbed';
process.env.PRODUCTION = false;
process.env.PRODUCTION_URL = 'http://thelivingrosaryapostolate.com';

export const state = () => ({
	sidebarOpen: false,
	sidenavIsHid: false,
	myTestMessage: 'This is the unedited message',
	serverinitmessage: 'initial message',
	serverinitid: 0,
	message: 'initial message',
	id: 0,
	contacts: [
		{
			name: 'Frank Bonack',
			email: 'frank.bonack@thelivingrosaryapostolate.com',
			phone: '1-715-477-2255',
			regions: ['United States', 'Canada', 'Mexico'],
			location: 'Wisconsin, United States',
			picture_url: 'static/dev/franktrudy.jpg',
		},
		{
			name: 'Trudy Agnes Bonack',
			email: 'jjmjmbonack@hotmail.com',
			phone: '1-715-477-2255',
			picture_url: ' ',
		},
		{
			name: 'Glenda La Fleur  ',
			email: 'glendalafleur@thelivingrosaryapostolate.com ',
			phone: '+46-790-453-675',
			whatsapp: '+46-790-453-675',
			regions: 'Europe, Canada, South America, West-Indies',
			location: 'Sweden',
			picture_url: ' ',
		},
		{
			name: 'Roger La Fleur Olsson  ',
			email: 'info@thelivingrosaryapostolate.com ',
			phone: '+46 -762-611-913',
			location: 'Sweden',
			title: 'Administrator of the Apostolate',
			picture_url: ' ',
		},
	],
	approvalsArray: [
		{
			id: 'arborelius',
			pdfurl: '/approvals/arborelius.pdf',
			author: 'Eminence Cardinal Anders Arborelius O.C.D.',
			church: 'Cardinal of Stockholm',
			location: 'Stockholm, Sweden',
		},
		{
			id: 'burke',
			pdfurl: '/approvals/burke.pdf',
			author: 'Raymond Leo Cardinal Burke',
			church: 'Patron of the Sovereign Military Order of Malta',
			location: 'Malta',
		},
		{
			id: 'trinidad',
			pdfurl: '/approvals/trinidad.pdf',
			author: 'Archbishop Joseph Harris',
			church: 'Archbishop of Port Of Spain',
			location: 'Port of Spain, Trinidad and Tobago',
		},
		{
			id: 'gordon',
			pdfurl: '/approvals/gordon.pdf',
			author: 'Bishop Joseph Gordon',
			church: 'Roman Catholic Diocese of Bridgetown',
			location: 'Bridgetown, Barbados, West Indies',
		},
		{
			id: 'darius',
			pdfurl: '/approvals/darius.pdf',
			author: 'Bishop Vincent Darius',
			church: "St. George's-in-Grenada",
			location: "St. George's, Grenada",
		},
		{
			id: 'powers',
			pdfurl: '/approvals/powers.pdf',
			author: 'Bishop James P. Powers',
			church: 'Bishop of Superior',
			location: 'Superior, WI, United States',
		},
		{
			id: 'greenbay',
			pdfurl: '/approvals/greenbay_diocese.pdf',
			author: 'Bishop David L. Ricken',
			church: 'Diocese of Green Bay',
			location: 'Green Bay, WI, United States',
		},
		{
			id: 'grimditch',
			pdfurl: '/approvals/grimditch.pdf',
			author: 'Bishop Thomas J. Olmsted',
			church: 'Roman Catholic Diocese of Pheonix',
			location: 'Phoenix, AZ, United States',
		},
		{
			id: 'hugo',
			pdfurl: '/approvals/hugo.pdf',
			author: 'Father Hugo Londono',
			church: 'Prince of Peace / Principe De Paz',
			location: 'Milwaukee, WI, United States',
		},
		{
			id: 'manny',
			pdfurl: '/approvals/manny.pdf',
			author: 'Father Manny Ediza',
			church: 'St. Michael Parish',
			location: 'San Diego, CA, United States',
		},
		{
			id: 'mcconnell',
			pdfurl: '/approvals/mcconnell.pdf',
			author: 'Father Patrick McConnell',
			church: 'St. Theresa Church',
			location: 'Three Lakes, WI, United States',
		},

		// {
		// 	id: 'willger',
		// 	pdfurl: '/approvals/willger.pdf',
		// 	author: 'Rev Gerard I. Willger',
		// 	church: 'Holy Rosary Catholic Church',
		// 	location: 'Medfor, WI, United States',
		// },

		// {
		// 	id: 'chartersafe',
		// 	pdfurl: '/approvals/chartersafe.pdf',
		// 	author: 'Diocese of Superior',
		// 	church: 'Diocese of Superior, Wisconsin',
		// },
	],
	detailsArray: [
		{
			detailsArray: [
				{
					id: 'howtopray',
					icon: '#pray',
					title: 'How to pray This Living Rosary?',
					excerpt: '',
					content:
						'The Rosary will begin the 1st of each month. Each person who joins will be assigned to specific decades and mysteries which will be for 20 months, and with completion of the 20 months you will start over from the beginning, that’s why it’s called This Living Rosary it lives on. You will pray one (1) decade of the Rosary for the period of one (1) Month and on the first of the following month, you will go on to the following decade. You do not have to meet anyone, you pray individually anytime of the day at your own convenience.  While praying and meditating your assigned decade each day of every month Our Blessed Mother Mary is leading you slowly to Her Son Jesus.  Remember: When it is your turn to pray the First Decade of each Mystery of the Rosary, you will also have to say the prayers that begin the Rosary: The Apostles Creed, The Our Father, The three (3) Hail Marys’ The Glory Be to the Father, and The O, my Jesus, forgive us our sins. Likewise when it is your turn to pray the Fifth Decade of each Mystery of the Rosary, you will say the ending prayer: Hail, Holy Queen.  If, however, you forget to pray your decade of the Rosary on a day, please pray it twice the following day. This way you will have completed the Rosary which was not completed the day before.  Please include with your intentions, prayers for the spiritual and temporal needs of your parish, prayers for Pro-Life Intentions, prayers for Our Holy Father, all Bishops, Priests, Religious, and for the petitions of those who have joined the living Rosary Family. Join us in Praying the Gospel and Changing the World!  The Rosary will begin the 1st of each month. Each person who joins will be assigned to specific decades and mysteries which will be for 20 months, and with completion of the 20 months you will start over from the beginning, that’s why it’s called This Living Rosary it lives on. You will pray one (1) decade of the Rosary for the period of one (1) Month and on the first of the following month, you will go on to the following decade. You do not have to meet anyone, you pray individually anytime of the day at your own convenience.  While praying and meditating your assigned decade each day of every month Our Blessed Mother Mary is leading you slowly to Her Son Jesus.  Remember: When it is your turn to pray the First Decade of each Mystery of the Rosary, you will also have to say the prayers that begin the Rosary: The Apostles Creed, The Our Father, The three (3) Hail Marys’ The Glory Be to the Father, and The O, my Jesus, forgive us our sins. Likewise when it is your turn to pray the Fifth Decade of each Mystery of the Rosary, you will say the ending prayer: Hail, Holy Queen.  If, however, you forget to pray your decade of the Rosary on a day, please pray it twice the following day. This way you will have completed the Rosary which was not completed the day before. Please include with your intentions, prayers for the spiritual and temporal needs of your parish, prayers for Pro-Life Intentions, prayers for Our Holy Father, all Bishops, Priests, Religious, and for the petitions of those who have joined the living Rosary Family. Join us in Praying the Gospel and Changing the World!',
				},
				{
					id: 'history',
					icon: '#book',
					title: 'History of This Living Rosary Apostolate',
					excerpt: '',
					content:
						' During World War II at a Lenten retreat in Poland, servant of God Jan Tyranowski a Catholic layman, was asked by Salesian Priests to organize Living Rosary groups since all priests were targeted by the Nazi regime. Groups were composed of fifteen devotees each meditating upon one of the fifteen mysteries daily. This ministry became a cornerstone for the Catholic underground in 1940. From these original devotions came ten men into the priesthood. At St. Stanislaus University in Krakow, Jan was the youth leader and central figure in the spiritual formation of the young Karol Wojtyla. Karol attended these meetings entitled the Living Rosary which fostered many vocations including Fr. Karol Wojtyla who in turn became Pope John Paul II.  In Mitchell South Dakota, US, in 2003, two priests from neighboring parishes asked their parishioners to start the Living Rosary for Lent. One of these priests Fr. Andrew being from Poland, was friends with Fr. Wojtyla. Father Andrew prayed the Living Rosary from his youth and instructed parishioners on how to pray the Living Rosary. In turn these parishioners’ numbers grew totaling five hundred devotees, thus began this Living Rosary in the US. The group asked others to help spread this beautiful devotion and rediscover the power of the Rosary. As of June 2019, this Living Rosary has spread to several states and countries in the world.',
				},
				{
					id: 'overview',
					icon: '#prayer',
					title: 'Overview of This Living Rosary Apostolate',
					excerpt: '',
					content:
						'The Living Rosary Apostolate is a devotion that has become a worlwide call to prayer. It is the Rosary in its entirety, but it is a shared devotion and accessible to all even in the busy schedule of our modern society. You do not need to meet with a group of people, you can pray individually as an adult or young person anytime of the day or night at your own convenience. However if you desire, it can be prayed together as a husband and wife, or as a family with your children, or teachers with their student’s in our Catholic schools & CCD classes, it’s a wonderful way to teach the children how to pray the Rosary. This rosary can be prayed by itself, or included with the rosaries, chaplets or private prayers that we pray on a daily basis. This rosary devotion is very do-able on a daily basis, and we assure you that it will be Spiritually very beneficial for you and your family. Each person who joins will be assigned to a specific decade or mystery of the rosary. You will only pray one decade of the rosary every day, that is it. It is that simple!!! For example - let’s take the Joyful Mysteries, if you are assigned the first decade, you would pray the beginning prayers, The sign of the Cross, The Apostles Creed, The Our Father, The Three Hail Marys and The Glory Be. Then you would pray and meditate slowly on the 1st Joyful Mystery(The Annunciation) 1 Our Father, 10 Hail Marys, Glory Be and the Fatima Prayer (O’ My Jesus).  That is it, you are finished for the day. You pray this decade the same exact way every single day for 1 month. Then the 1st day of the 2nd month you switch to the 2nd Joyful Mystery (The Visitation ), pray 1 Our Father, 10 Hail Marys, Glory Be and O’ My Jesus. Pray this decade the same exact way every single day for the entire month. The 1st day of the 3rd month switch to the 3rd decade, pray this decade the same exact way every day for the entire month. The 1st day of the 4th month switch to the 4th decade, the 1st day of the 5th month switch to the 5th decade, and end with the Hail Holy Queen prayer, this completes the Rosary.  So by praying the Rosary in this fashion it will take you 5 months to pray one rosary this way and it will take you 20 months to pray all 4 Mysteries of the rosary. After completion of the 20 month schedule, you would start at the beginning again. That is why it is called The “Living Rosary”. It lives on and on and on. One of the beautiful parts about this devotion is the Meditations that are included with your schedule. Before you pray your assigned decade, you find the designated Meditation, read it and meditate on it while you are praying your decade. This way of praying empties and quiets our hearts from the ways of the world. We are drawn intimately into the lives of Our Lord and Our Lady, and receive the love, peace and joy from Them, that we can’t obtain from worldly things. We ask you to please pray for our Holy Father, all of our beloved Cardinals, Bishops, Priests, Deacons, and the religious throughout the entire world, for vocations, for all of the pro-life endeavors, and for all of the Spiritual and temporal needs of your own Parish. The beauty and power that makes this Rosary so special eminate from the hearts of the millions of people around the world who are also praying this devotion. They pray for all of your own personal heartfelt intentions, while you pray for theirs, so you are praying together in unity as one family. It is very, very powerful. Upon joining you will receive 3 sheets of information . The 1st sheet will be your 20 month schedule from top to bottom, and when you finish at the bottom of your schedule, you start over again at the top. (It is a life time commitment) The 2nd sheet is an explanation on how to pray this Living Rosary, along with the suggested intentions at the bottom, and the 3rd sheet front and back are all the meditations that go along with each individual decade that you pray. This “Living Rosary” began in Nazi occupied Poland during the second World War. Started in Krakow, Poland, as Nazis were arresting the Salesian Priests. The priests asked Catholic layman, Jan Tyranowski, to gather groups of 15 youth to pray the 15 decades (which are now 20). These groups were called Living Rosary Circles.  Pryaing for their freedom and families in war torn Europe, the Living Rosary brought peace and unity to those fleeing for their lives. From this 1st group of 15 youth, 10 became priests. One of these priests name was Fr. Karol Wojtyla, who is now our beloved St. Pope John Paul the II. This Living Rosary was a part of his path to the priesthood. He also prayed and promoted this Rosary his entire life. To receive your schedule and join in the joy of this devotion fill out the short form by <a href="join">clicking here</a>, or scrolling down to the contact section of this webpage.  Please join us in Praying the Gospel and Changing the World! Thank you and God Love You!',
				},
				{
					id: 'whatislra',
					icon: '#pray',
					title: 'What is This Living Rosary?',
					excerpt: '',
					content:
						"This Living Rosary embraces the hearts of thousands of families and individuals through the meditation on one decade daily, unifying their intentions with the Roman Catholic hierarchy, religious, parishes and pro-life endeavors. The devotion shows how the mysteries of Christ's life can be transformed into our daily lives, allowing the experience to live and love as Christ asks of us. Meditating with Jesus and Mary through these mysteries help us to discover the messages her son intends for our daily growth.",
				},
			],
		},
	],
	mysteriesArray: [
		{
			id: 'joyful_mysteries',
			title: 'JOYFUL MYSTERY MEDITATIONS',
			joyfulMysteriesArray: [
				{
					title: 'Annunciation - Humility',
					meditation:
						'Mary received with deep humility the news of the Angel Gabriel that she was to be the Mother of the Son of God. Grant that I may always accept the will of God with humility like Mary',
				},
				{
					title: 'Visitation - Love of Neighbor',
					meditation:
						'Mary showed true charity in visiting Elizabeth and remaining with her for three months before the birth of John the Baptist. Grant me the grace to support and love my neighbor like Mary.',
				},
				{
					title: 'Nativity - Poverty',
					meditation:
						'Mary lovingly accepted the poverty of the stable, although she was to give birth to our God and Redeemer. Grant me the grace to endure poverty like the Holy Family when I long for richer things.',
				},
				{
					title: 'Presentation - Obedience',
					meditation:
						'Mary and Joseph observed the law of God in presenting the Child Jesus in the temple. Help me to grow in the virtue of obedience.',
				},
				{
					title: 'Finding in the Temple - Joy in Finding Jesus',
					meditation:
						'Mary was filled with sorrow at the loss of Jesus, her Son, and overwhelmed with joy in finding Him in the temple surrounded by the teachers. Obtain for me the joy of staying close to Jesus.',
				},
			],
		},
		{
			id: 'luminous_mysteries',
			title: 'LUMINOUS MYSTERY MEDITATIONS',
			luminousMysteriesArray: [
				{
					title: 'Baptism of Jesus in the Jordan - Openness to the Holy Spirit',
					meditation:
						'Jesus, at Your Baptism, You remained open to the Holy Spirit and were filled with the power of God to begin Your public ministry. Through my Baptism and Confirmation, may I remain ever open to the Spirit of God in my life.',
				},
				{
					title:
						'Manifestation of Jesus at the Wedding at Cana - To Jesus through Mary',
					meditation:
						'Mary, you know my needs and the needs of all your spiritual children so well. When life is hard and I face a difficult situation, please pray to Jesus on my behalf. Help me to follow your counsel by doing whatever He tells me.',
				},
				{
					title:
						'Proclamation of the Kingdom of God - Repentance and Trust in God',
					meditation:
						'Lord Jesus, You came as the Light into the world, proclaiming the Good News. With great boldness and power, You dispelled the darkness of sin, death, and the Evil One in the world. Help me to repent of my own sin and to trust more in You.',
				},
				{
					title: 'Transfiguration of Jesus - Desire for Holiness',
					meditation:
						'Lord Jesus, You revealed Your glory to encourage the disciples to fix their eyes upon the hope of glory when faced with trials. Help me, Lord, to fix my eyes upon You in the glory of Heaven. Fill me with the desire to become a saint.',
				},
				{
					title: 'Institution of the Eucharist - Adoration',
					meditation:
						'Lord Jesus, as I am nourished by your Body and Blood in Holy Communion, help me to be transformed more and more into Your image. And may I spend time adoring Your  Body and Blood, Soul and Divinity in the Most Blessed Sacrament',
				},
			],
		},
		{
			id: 'sorrowful_mysteries',
			title: 'SORROWFUL MYSTERY MEDITATIONS',
			sorrowfulMysteriesArray: [
				{
					title: 'Agony in the Garden - Sorrow for Sin',
					meditation:
						'Jesus, You suffered a bitter agony in the Garden of Gethsemane because of our sins. Lead me to prayer in my time of need and grant me true contrition for my sins.',
				},
				{
					title: 'Scourging at the Pillar – Purity',
					meditation:
						'Jesus, You remained pure of heart even when Your flesh was torn and scourged by those who hated You. Help me to grow in the virtue of purity even when I suffer.',
				},
				{
					title: 'Crowning with Thorns - Courage',
					meditation:
						'Jesus, You patiently endured the pain from the crown of sharp thorns that was forced upon Your head. Grant me the strength to have moral courage to follow You.',
				},
				{
					title: 'Carrying of the Cross - Patience',
					meditation:
						'Jesus, You willingly carried Your Cross for love of Your Father and all people. Grant me the forbearance and patience to carry my cross in difficult moments.',
				},
				{
					title: 'Crucifixion - Perseverance',
					meditation:
						'Jesus, You bravely endured torture on the Cross and gave up Your life for the salvation of all humankind. Grant me peace of mind, body, and spirit, and the grace of perseverance in adversity.',
				},
			],
		},
		{
			id: 'glorious_mysteries',
			title: 'GLORIOUS MYSTERY MEDITATIONS',
			gloriousMysteriesArra: [
				{
					title: 'Resurrection – Faith',
					meditation:
						'Jesus, You rose from the dead in triumph and remained for forty days with Your disciples, instructing them and encouraging them. Grant me the desire to always have faith in You, my Risen Lord.',
				},
				{
					title: 'Ascension-Hope',
					meditation:
						'Jesus, You instilled in the disciples the virtue of hope in life everlasting and commanded them to carry Your Gospel throughout the world. As You sit at the Fathers right hand in heaven, grant me the grace to grow in the virtue of hope and inspire me to lead others to You.',
				},
				{
					title: 'Descent of Holy Spirit - Love for God',
					meditation:
						'Jesus, Your disciples received the Holy Spirit to foster their love for You. Grant that I may show my love for You by proclaiming the Good News of salvation.',
				},
				{
					title: 'Assumption - Grace of a Happy Death',
					meditation:
						'Mary, you were assumed body and soul into heaven by the power of God, and united with your Divine Son, Jesus. Obtain eternal happiness with Him for me.',
				},
				{
					title:
						'Coronation of the Blessed Virgin Mary - Trust in Mary’s Intercession',
					meditation:
						'Mary, you humbled yourself before God and you were crowned Queen of Heaven. Bless me with the love of the Holy Trinity and intercede for me in Heaven.',
				},
			],
		},
	],
});

// have to be synchronous
export const mutations = {
	sidenavNowHid(state, sidenavIsHid) {
		state.sideNavIsHid = sidenavIsHid;
	},
	sidebarOpenChange(state, sidebarOpen) {
		state.sidebarOpen = sidebarOpen;
	},
	updateMyTestMessage(state, myTestMessage) {
		state.myTestMessage = myTestMessage;
	},
	reset_serverinits(state, arg) {
		if (process.env.DEBUG) {
			console.log(`arg in mutation->reset_serverinits = ${arg}`);
			for (var ar in arg) {
				console.log(`for ${ar} value = ${arg.ar}`);
			}
		}
		state.serverinitmessage = arg.message;
		state.serverinitid = arg.id;
	},
	resetBoth(state, arg) {
		console.log(arg);
		state.message = arg.message;
		state.id = arg.id;
	},
};

export const getters = {
	getSidenavIsHid: (state) => {
		return state.sideNavIsHid;
	},
	getSidebarOpen: (state) => {
		return state.sidebarOpen;
	},
	getMyTestMessage: (state) => {
		return state.myTestMessage;
	},
	getDetailsArrayContent: (state) => {},
};

// can be async
// trigger action with store.dispatch('<action>')
export const actions = {
	updateSideNavIsHid: ({ commit, state }, sidenavIsHid) => {
		commit('sidenavNowHid', sidenavIsHid);
	},
	// async nuxtServerInit(store, context) {
	// 	if (process.env.DEBUG) {
	// 		console.log('nuxtServerInit - Entry');
	// 	}
	// 	try {
	// 		// URL-depends on environment variable
	// 		var apiUrl = '';
	// 		if (process.env.DEBUG) {
	// 			apiUrl = process.env.DEBUG_URL;
	// 		} else if (process.env.TESTING) {
	// 			apiUrl = process.env.TESTING_URL;
	// 		} else {
	// 			apiUrl = process.env.PRODUCTION_URL;
	// 		}
	// 		if (process.env.DEBUG) {
	// 			console.log(`Using ${apiUrl}/api/ for apiUrl`);
	// 		}
	// 		//	const response = await context.$axios.get(`${apiUrl}/api/getInit`);
	// 		// changed this:
	// 		//return response.data;
	// 		// to this:
	// 		const response = [];
	// 		if (response.data[0]) {
	// 			if (process.env.DEBUG) {
	// 				console.log('');
	// 				console.log('nuxtServerInit response.data[0]');
	// 			}
	// 			context.store.commit('reset_serverinits', response.data[1]);
	// 		} else {
	// 			console.log('GET error nuxtServerInit: ', context.error);
	// 		}
	// 	} catch (err) {
	// 		console.log('Catch error nuxtServerInit: ', err);
	// 	}
	// },
	updateSidebarOpen: ({ commit, state }, props) => {
		commit('sidebarOpenChange', props);
		return state.sidebarOpen;
	},
	// updateMyTestMessage(context) {
	//   context.commit('updateMyTestMessage');
	// }
	updateMyTestMessage({ commit, state }, payload) {
		// can handle multiple mutations
		commit('updateMyTestMessage', payload);
		return state.myTestMessage;
	},
	async resetBothAsync(context, payload) {
		context.commit('resetBoth', payload);
	},
};
