<script>
   const scriptURL =
       'https://script.google.com/macros/s/AKfycbx3cgQ4PfFgn6ZHSZWUZ6Scs6agtOAgFSa9iSyFplJSLBOSU2w0r9n-KiYyDfgbSZRq/exec'
   const form = document.forms['google-sheet']

   form.addEventListener('submit', e => {
       e.preventDefault()
       fetch(scriptURL, {
               method: 'POST',
               body: new FormData(form)
           })
           .then(response => alert(
               "Thanks for you valuable feedback!!!"))
           .catch(error => console.error('Error!', error.message))
   })

</script>

