
$(".carousel").each(function(){var a=$(this),e=a.find(".carousel-item").length,f=a.find(".mbr-slider-slide").eq(0),g=a.find(".mbr-slider-slide").eq(1);f.text(e);g.text(2);a.on("slid.bs.carousel",function(){var a=$(this),b=$(this).find(".carousel-item").length,c=a.find(".mbr-slider-slide").eq(0),d=a.find(".mbr-slider-slide").eq(1);i=a.find(".carousel-item.active").index();c.text(i);d.text(i+2);0==i?c.text(b):i==b-1&&d.text(1)})});