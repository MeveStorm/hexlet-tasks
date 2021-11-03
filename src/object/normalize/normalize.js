/* eslint-disable no-param-reassign */
import _ from 'lodash';

const normalize = (lesson) => {
  lesson.name = _.capitalize(lesson.name);
  lesson.description = lesson.description.toLowerCase();
  return lesson;
};

export default normalize;
