const app=require('./server')

const port=process.nextTick.PORT||3000

app.listen(port,()=>{
    console.log('hi,Server Running....')
})