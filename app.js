// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
// app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {

  console.log('#######################');
  console.log(JSON.stringify({query: params.query, headers: req.headers}, null, 2));
  console.log('#######################');
  
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
      <title>Sample for Google assistant</title>
  </head>
  
  <body>
      <h1>A title</h1>
      <script> 
      try{
        var t=1,
        c1="8CUA7YVX7",
        c2="8CUA7YVX7",
        o1={
            template_id: t,
            cust_id: c1,
            kw_id:"179612169",
            kw_pos:"1",
            cme:"NRWhi0ui679aYqMywpNlAoHeCguCD7aUkj5YWHqQWAEr2izNFoCaXK3AwjVLrG3u4hw2GFSOX7fj2ZJd4u7Qqrh-eGSXoeI3EF00Yl0fGNyIsHBq1Wuy8FgHQZzydXHbOlVGDjLnSZ0e9vjTFr8Bultbkm5l1Omy_Y66SqGkwZAt2zObBDNxn4rankrB9WHzceqCQkTZmon-QikZVyGS0wX-3dnJUVT0OXD6p-gP4Z61wOFYyOzwee_O7dfwQzYWuQVJf8n_smCrmFHK4kCORb8KvPobDCyc0APFV1KmgINLI6yL6oqQAg==||NDHRnZ9Gz3KXlI-i9OnZqQ==|BZd3tE3IhcI48Xag9F9R8jT4vu8Pbz-1tPqVufHb9COng--fmRFJy9Ja0AVO63VI|Lu4K3Nxwqh6MHsRs_UhvJw==|QO8wZATenN3jNpSVIUg2zg==|y2SqoJcE0s_zON1WBsu_TZC4R_8GC00EyD-n1EK5GNA=|0Y8CVbtVeJJAtow9akELHzbNatrBBLDxfe5fe87wMlkt8Ju3srhpce2WDobwR5K3ETBVii5WGgRgBxR9-xuLHpdw6djaml-B0VXWLDckIfYA1UHrvJ_aNY3XAzENQ54BdEoZVylo21dse0MrGrmptTdG2sd7yIfq|N7fu2vKt8_s=|wBSZqmjBnumzNuweb-psAw==|J2Q8L7Evo4hASvWHiPXsgXa9a2H6pYZziM6pF3zA2xyJdIbBCrq-wyXw8k0TbS0_1agSOHKX6-gzP210NlZjdi-MWQVBvcp8zZs2NCsgfyxw1zI0M4X73qlpQuzXoSzYrT6Qj4DQXAiUtvZ2PvfE4ihBEXdr3JPVrZGCf-N19w5sK46P1_WsSVJpmrmrzAdHP--zmE_y3gLb5CZvxV5oEA==|bvwpVZbVzPqwx9aqVs4TYOdX2o3SnJaK|",
            hvsid:"00001634801617795007378451417098",
            vsid:"2561325898851095",
            page_id: 'result_page',
            vi_id:"8363823545811630330",
            cmUrl:"http://related.webmd.com/search.cfm?srprc=3&lgplp=jf75EJ%3AQJ778zy&ktr=0&cq=xW51VWB9d5vdKVgNvmfdlfVvNq&vsid=2561325898851095&vi=1634800757877882397&kp=1&kbc=1202954322&kt=244&ki=179612169&ktd=274911592448&kbc2=rpc%3D0.06%7C%7Clvl%3D5.00&kmb=LTEuMDAw&fdkt=244&fp=biwFab2EOSptF9Dp9P5pLPob7e8J2eU31usEYEIMLHxx1sZh-gU2fVnxvuMylA1jSHN9fNph55NguEvl0BWQ_5mvS1LB-oYx0wkTwCnnqNm3wiwlgU-uuvpJS-cxgUhU&c=NsYwr6Ihkysl1zro7Aa_Tg&cme=d1bD75Cvjo6h70PzqpBwLtTfyRa0AybxR-lx0AcWErlYAUTLe_QDSWG3du78dH0fkklegMa6XcUlUFq9JSeI1ADFE5t9AlfJPvzwaZfF1BmZD8MZXTaOF0aXPJHiG8MGt_tI9hZF2J6XdR2gm5Cu0Pg5R3vrOcvDUpKjzk07yIA-KX5nQ_-MKhGyN08Ix9_l9E_bC5Wwl60%3D%7C%7CNDHRnZ9Gz3KXlI-i9OnZqQ%3D%3D%7CBZd3tE3IhcI48Xag9F9R8jT4vu8Pbz-1tPqVufHb9COng--fmRFJy9Ja0AVO63VI%7CLu4K3Nxwqh6MHsRs_UhvJw%3D%3D%7CQO8wZATenN3jNpSVIUg2zg%3D%3D%7Cy2SqoJcE0s_zON1WBsu_TZC4R_8GC00EyD-n1EK5GNA%3D%7C0Y8CVbtVeJJAtow9akELHzbNatrBBLDxfe5fe87wMlkt8Ju3srhpce2WDobwR5K3ETBVii5WGgRgBxR9-xuLHpdw6djaml-B0VXWLDckIfYA1UHrvJ_aNY3XAzENQ54BdEoZVylo21dse0MrGrmptTdG2sd7yIfq%7CN7fu2vKt8_s%3D%7CwBSZqmjBnumzNuweb-psAw%3D%3D%7CJ2Q8L7Evo4hASvWHiPXsgXa9a2H6pYZziM6pF3zA2xyJdIbBCrq-wyXw8k0TbS0_1agSOHKX6-gzP210NlZjdi-MWQVBvcp8zZs2NCsgfyxw1zI0M4X73qlpQuzXoSzYrT6Qj4DQXAiUtvZ2PvfE4ihBEXdr3JPVrZGCf-N19w5sK46P1_WsSVJpmrmrzAdHP--zmE_y3gLb5CZvxV5oEA%3D%3D%7C&ib=0&prid=7PRFT79UO&cid=8CUU54RQD&crid=540688367&size=600x175&lpid=&tsid=286&ksu=257&chid=&https=0&kwdsMaxTm=400&ugd=4&pid=8POW81VRX&rms=1634801622&vgd_isiolc=1&kbbq=%26amp%3Bsde%3D1%26amp%3Badepth%3D1%26amp%3Bddepth%3D1&tdAdd[]=%7C%40%7Csde%3D1%7C%40%7Cadepth%3D1%7C%40%7Cddepth%3D1&vsidtv=000V10&verid=3121199&hvsid=00001634801617795007378451417098&upk=1634801617.12719&sttm=1634801617795&site=core&vgd_ifrmode=00&sc=MH&oksu=257&asn=45916&ecref=w77EQ%3ASSBBB.BJGYO.NmYS&bd=5.5%231050%231680&lgpl=eQ7L8O%3AfXFuAfXWiWWXu9iX%7CNkxO%3Afu9A9f%7C8QM1YE%3A9%7CmE7mx7%3A9%7CjfNw%3A9%7CJN7%3AHy%7CLJzQ8lJ%3AW99MuhX%7CQNLMw%3Au9X9%7CQNLMB%3AuFW9%7C1UN8E%3AHA.fX9.uXi.uHi&kct=4086&abpl=2&onhvrf=1",
            pid:"8POW81VRX",
            chnm:"WebMD-MedRef-BTF_Non-US_desktop",
            chnm2:"4306",
            chnm3:"93259",
            pgtid:"2",
            pvs_id: "1_1"
        },
        o2={},
        s1=document.createElement('script'),
        s2=document.createElement('script'),
        url1="https://testsa-a.akamaihd.net/javascripts/browserfp.min.js?templateId="+t+"&customerId=";
        url2="https://testsa-a.akamaihd.net/javascripts/browserfp.min.js?templateId="+t+"&customerId=";
        Object.assign(o2,o1,{cust_id:c2});
        var fn1=function(){try{var f=new browserfp();f.setPageAttr(o1);f.sendViewData();}catch(e){console.log("f1:"+e)}},
        fn2=function(){try{var f=new browserfp();f.setPageAttr(o2);f.sendViewData();}catch(e){console.log("f2:"+e)}};
        s1.src=url1+c1;
        s2.src=url2+c2;
        s1.async=s2.async="async";
        s1.onload=fn1;s2.onload=fn2;
        document.body.append(s1);
      }catch(e){console.log("bfp:"+e);}
      </script>
      <p>
      Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.
      </p>
      <p>
          Here is an text sample.
      </p>
  
  </body>
  
  </html>
  `);
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));