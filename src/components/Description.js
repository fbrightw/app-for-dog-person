import React, {Component} from 'react';

class Description extends Component {
  render() {
    return (
        <div className="container font-sans text-xl w-100 border-2 text-left p-10 z-20">
          {"Dogs have been part of human societies for longer than any other domestic species. " +
           "Like no other species they exemplify the role of companion animals. Relationships with " +
           "pet dogs are both very widespread and very intense, often leading to strong attachments " +
           "between owners or caregivers and animals and to a treatment of these dogs as family members " +
           "or even children." }
        </div>
    );
  }
}

export default Description;