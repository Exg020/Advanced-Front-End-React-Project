package com.group.project.travelplanner.service;

import com.group.project.travelplanner.model.Activity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ActivityService {
    Activity getActivity(Long id);
    Activity addActivity(Activity activity);
    List<Activity> getActivities();
}
