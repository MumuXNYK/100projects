const followers = document.querySelectorAll('.followers')

followers.forEach(counter =>{
    counter.innerHTML = '0'

    const updateFollowers = ()=>{
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const inc = target / 500

        if (c < target){
            counter.innerHTML = `${Math.ceil(c+inc)}`
            setTimeout(updateFollowers, 1);
        } else {
            counter.innerHTML = target;
        }
    }
    updateFollowers();
})