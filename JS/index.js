
const app = new Vue({
    el: '.app',
    data: {
        messages: [
            {
                text: 'That sounds great. I’d be happy with that.',
                mine: false,
                promo: false
            },
            {
                text: 'Could you send over some pictures of your dog, please?',
                mine: false,
                promo: false
            },
            {
                photos: ['./images/dog-image-1.jpg', './images/dog-image-2.jpg', './images/dog-image-3.jpg'],
                mine: true,
                promo: false
            },
            {
                text: 'Here are a few pictures. She’s a happy girl!',
                mine: true,
                promo: false
            },
            {
                text: 'Can you make it?',
                mine: true,
                promo: false
            },
            {
                text: 'She looks so happy! The time we discussed works. How long shall I take her out for?',
                mine: false,
                promo: false
            },
            {
                text: '30 minute walk',
                mine: false,
                promo: true,
                price: 29
            },
            {
                text: '1 hour walk',
                mine: false,
                promo: true,
                price: 49
            },
        ],
        message: ''
    },
    methods: {
        addNewNormalMessage: function() {
            if (this.message) {
                this.messages.push({
                    text: this.message,
                    mine: true,
                    promo: false
                });
                this.message = '';
            }
            
        }    
    }
})