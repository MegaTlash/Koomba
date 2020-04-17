<template>
    <body>
        <h1>Analytics</h1>
        <div id="arc">
        </div>
        
    </body>
</template>


<script>

import * as d3 from "d3";

export default {
    name: "Graph",
   data() {
    return {
        //Data for the graph
      workDone: [
        {name: "Sweaters", sold: 60.0},
        {name: "Beanies", sold: 25.0},
        {name: "HeadBands", sold: 10.0},
        {name: "WindBreakers", sold: 15.0},
        {name: "T-shirts", sold: 45.0},
      ]
    };
  },

    mounted() {
    this.generateGraph();
  },
   methods: {
    
    //Method to generate the graph to the method
    generateGraph() {
        const margin = 50;
        const width = 800;
        const height = 500;
        const chartWidth = width - 2 * margin;
        const chartHeight = height - 2 * margin;

        //The colour and the domain of the scale
        const colourScale = d3.scaleLinear()
                          .domain([10, 60])
                          .range(['green', 'purple']);


        const xScale = d3.scaleBand()
                     .range([0, chartWidth])
                     .domain(this.workDone.map((s) => s.name))
                     .padding(0.3);


         const yScale = d3.scaleLinear()
                     .range([chartHeight, 0])
                     .domain([0, 100]);
        

        const svg = d3
            .select("#arc")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

    
        const canvas = svg.append('g')
                        .attr('transform', `translate(${margin}, ${margin})`);

        // chart title
        svg.append('text')
            .attr('x', margin + chartWidth / 2)
            .attr('y', margin)
            .attr('text-anchor', 'middle')
            .text('Sales per Month');


        // x-axis and label
        canvas.append('g')
                .attr('transform', `translate(${margin}, ${chartHeight})`)
                .call(d3.axisBottom(xScale));

        svg.append('text')
           .attr('x', margin + chartWidth / 2 + margin)
           .attr('y', chartHeight + 2 * margin - 15)
           .attr('text-anchor', 'middle')
           .text('Items');

        // y-axis and label
        canvas.append('g')
                .attr('transform', `translate(${margin}, 0)`)
                .call(d3.axisLeft(yScale));

        svg.append('text')
           .attr('x', -margin + -(chartWidth / 2))
           .attr('y', margin)
           .attr('transform', 'rotate(-90)')
           .attr('text-anchor', 'middle')
           .text('Number of items sold');


            // the bar chart
        const bars = canvas.selectAll('rect')
                        .data(this.workDone)
                        .enter()
                            .append('rect')
                                .attr('x', (data) => margin + xScale(data.name))
                                .attr('y', chartHeight)
                                .attr('height', 0)
                                .attr('width', xScale.bandwidth())
                                .attr('fill', (data) => colourScale(data.sold))
                                .on('mouseenter', function() {
                                    d3.select(this)
                                        .transition()
                                        .duration(200)
                                        .attr('opacity', 0.5);
                                })
                                .on('mouseleave', function() {
                                    d3.select(this)
                                        .transition()
                                        .duration(200)
                                        .attr('opacity', 1.0);
                                });
        bars.transition()
            .ease(d3.easeElastic)
            .duration(800)
            .delay((data, index) => index * 50)
            .attr('y', (data) => yScale(data.sold))
            .attr('height', (data) => chartHeight - yScale(data.sold));
        
        }
        
    },
    
}
</script>



<style scoped>
h1 {
    font-size:3rem;
    font-weight: bold;
    font-style: italic;
    color: rgb(141, 197, 150);
    text-align: center;
}

</style>




