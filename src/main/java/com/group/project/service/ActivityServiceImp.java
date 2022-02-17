package com.group.project.travelplanner.service;

import com.group.project.travelplanner.model.Activity;
import com.group.project.travelplanner.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityServiceImp implements ActivityService {
    @Autowired
    private ActivityRepository activityRepository;

    public Activity getActivity(Long id) {
                var activity = activityRepository.getById(id);

        return (new Activity(activity.getId(),
                activity.getTitle(),
                activity.getTime(),
                activity.getNotes(),
                activity.isCompleted()
                ));
    }

    public List<Activity> getActivities() {
        return activityRepository.findAll();
    }

    public Activity addActivity(Activity activity) {
        return activityRepository.save(activity);
    }



}
