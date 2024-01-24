let count = 0;

// select value and buttons

const val = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(e){
    e.addEventListener('click', function(e) {
        const styles = (e.currentTarget.classList)
        if(styles.contains('decrease')) {
            if(count == 0) {
                alert(`Count is already 0!`)
            }
            else count--;
        } else if(styles.contains('increase')) {
            count++;
        } else count = 0;
        if(count > 0) {
            val.style.color = 'green'
        } else val.style.color = '#222'
        val.textContent = count;
    })
})