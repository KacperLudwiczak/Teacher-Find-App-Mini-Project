import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [    
        {
          id: 'c1',
          firstName: 'Tom',
          lastName: 'Lee',
          areas: ['frontend', 'career'],
          description:
            'I am Tom and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 40
        },
        {
          id: 'c2',
          firstName: 'Bob',
          lastName: 'Smith',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Bob and I've worked as a freelance web developer for years.",
          hourlyRate: 35
        },
        {
          id: 'c3',
          firstName: 'Jack',
          lastName: 'Wick',
          areas: ['backend', 'career'],
          description:
            "I'm Jack and I've worked as a freelance web developer for years.",
          hourlyRate: 30
        },
      ]
    };
  },
  mutations,
  actions,
  getters
};
