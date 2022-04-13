const ap = Vue.createApp({
    data() {
        return {
            paragon: {
                firma: 'UNIKPOL S.A.',
                ulica: 'ul. Ukryta 5',
                miasto: '02-114 Rawa Mazowiecka',
                telefon: 'tel. 22 345 90 21, 888 213 992',
                link: 'http://www.unikpol.pl'
            },
            todolist: [
                {do: 'zrób rzecz nr 1'},
                {do: 'zrób rzecz nr 2'},
                {do: 'zrób rzecz nr 3'},
                {do: 'zrób rzecz nr 4'}
            ],
            counter: 0,
            book: {
                title: '',
                name: '',
                surname: ''
            },
        }
    },
    methods: {
        addcount() {
            this.counter += 1
        },
        formsub() {
            console.log('Dane z formularza:')
            console.log(this.book.title)
            console.log(this.book.name)
            console.log(this.book.surname)
        },
    }
})
