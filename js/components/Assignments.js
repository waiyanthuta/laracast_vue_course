import AssignmentList from  "./AssignmentList.js"

export default{
    components : {
        AssignmentList,
    },
    template: `
    
        <section class="space-y-6">
        <assignment-list :assignments="filters.progressAssignment" title="In Progress Assignment" >  </assignment-list>
        <assignment-list :assignments="filters.completeAssignment" title="Completed Assignment" >  </assignment-list>
        </section>
   

    `,

    data() {
        return {
            assignments : [
                {name : 'Finish Project' , complete : false , id : 1},
                {name : 'Star Vue Course' , complete : false , id : 2},
                {name : 'Write Porfolio' , complete : false , id : 3}
            ]
        }
    },
    computed: {
        filters(){
           return {
               progressAssignment: this.assignments.filter(a => !a.complete),
               completeAssignment: this.assignments.filter(a => a.complete),
           }
        }
    }
}