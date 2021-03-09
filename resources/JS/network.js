
  var width = 800,
  height = 500;
 
  var svg = d3.select("#workDone").append("svg")
    .attr("width", width)
    .attr("height", height);
    
  d3.json("graph.json", function(error, json){
    
    var nodes = json.nodes.map(function(d){
      return {
        'index' : d.id,
        'x' : d.x,
        'y' : d.y,
        'fixed': true,
        'label' : d.label
      }
      
    })
 
    var links = json.edges.map(function(d){
      return {
        'source': parseInt(d.source),
        'target': parseInt(d.target)
      }
    })
 
    var foci = [],
    labelNodes = [];
 
    for(var i=0; i < nodes.length; i++){
     
      var center = {x: nodes[i].x, y: nodes[i].y}
      foci.push(center);
     
      center["label"] = nodes[i].label;
      center["index"] = nodes[i].index;
    
      labelNodes.push(center)
    };
    
    var force = d3.layout.force()
      .nodes(nodes)
      .links(links)
      
    force.start();
    
    var force2 = d3.layout.force()
      .nodes(labelNodes)
      .links([])
      .gravity(0)
      .charge(-3)
      .on("tick", tick)
      
    force2.start();
    
    svg.append("g")
      .attr("class", "network")
      .attr("transform", "translate(430, 270)");
      
    var network = svg.selectAll("g.network")
    
    network.append("g")
      .selectAll("line.link")
      .data(links).enter()
      .append("line")
      .attr("class", "link")
      
    var link = svg.selectAll(".link")
 
    network.append("g")
      .attr("class", "nodes")
      .selectAll("g.node")
      .data(force.nodes())
      .enter()
      .append("svg:g")
      .attr("class", "node")
      
    var node = svg.selectAll("g.node")
    
    node.append("svg:circle")
      .attr("r", function(d) { return 5; })
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
      
    network.append("g").attr("class", "labels")
      .selectAll("g.label")
      .data(labelNodes)
      .enter()
      .append("svg:text")
      .attr("class", "label")
      .text(function(d) {return d.label;})
      
    var label = svg.selectAll(".labels text")
    
      function tick(test) {
        var k = .1* test.alpha;
        
        labelNodes.forEach(function(d){
          d.y += (labelNodes[d.index].y - d.y) * k;
          d.x += (labelNodes[d.index].x - d.x) * k;
        });
        
        label.attr("x", function(d) { return d.x; })
          .attr("y", function(d) { return d.y; });
 
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
      }
      
 
  });
  