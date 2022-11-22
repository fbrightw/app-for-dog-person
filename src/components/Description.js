import React, {Component} from 'react';

class Description extends Component {
  render() {
    return (
        <div className="container font-sans text-lg w-100 text-left p-10 z-20 leading-9">
          {"Dogs have been part of human societies for longer than any other domestic species. " +
           "Like no other species they exemplify the role of companion animals. Relationships with " +
           "pet dogs are both very widespread and very intense, often leading to strong attachments " +
           "between owners or caregivers and animals and to a treatment of these dogs as family members."}
          <br/>
          <br/>
          {"It's your decision to have one of them, our goal is to make your choice easier with " +
            "given info about breeds" }
        </div>
    );
  }
}

export default Description;