document.addEventListener("DOMContentLoaded", function () {


    const goBack = function () {
        let air = document.createElement('ul')
        document.body.append(air)
        airlines.forEach(function (airline) {
            let li = document.createElement("li")
            li.append(airline.name)


            let button1 = document.createElement("button")
            button1.innerHTML = "Details"
            button1.addEventListener('click', function () {
                air.remove()
                let h1 = document.createElement("h1")
                h1.append(airline.name)
                document.body.append(h1)

                let img = document.createElement("img")
                img.src = airline.logoUrl
                img.style.width = "100px"
                document.body.append(img)


                let button3 = document.createElement("button")
                button3.innerHTML = "Back"
                button3.addEventListener('click', function () {
                    h1.remove()
                    img.remove()
                    goBack()
                    button3.remove()
                    edit.remove()
                })
                document.body.append(button3)


                let edit = document.createElement("button")
                edit.innerHTML = "Edit"
                edit.addEventListener("click", function () {

                    let form = document.createElement("form");
                    form.id = "airline-id"
                    let input = document.createElement("input");
                    input.type = "text"
                    input.value = airline.name
                    let submit = document.createElement("button")
                    submit.id = "submit"
                    submit.innerHTML = "Submit"
                    form.append(input, submit)
                    document.body.append(form)

                    form.addEventListener('submit', function (e) {
                        e.preventDefault()
                        airline.name = e.target[0].value
                        h1.innerHTML = airline.name
                        submit.remove()
                        input.remove()

                    })
                });





                document.body.append(edit)
            });


            let button2 = document.createElement("button")
            button2.innerHTML = "Delete"
            button2.addEventListener('click', function () {
                li.remove()
                button2.remove()
                button1.remove()

            });

            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
            air.append(li)
            air.append(button1)
            air.append(button2)



        });
    };
    goBack()
});

