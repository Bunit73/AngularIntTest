import { VoterComponent } from './voter.component';
 
describe('VoteComponent', () => {
    let component: VoterComponent;

    beforeEach(() => {
        component = new VoterComponent;
    });

    it('should increment total votes when', () => {
        component.upVote();
        expect(component.totalVotes).toBe(1);
    });

    it('should decrement total Votes when downvoted', () => {
        component.downVote();
        expect(component.totalVotes).toBe(-1);
    });
})