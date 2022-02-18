package com.group.project.travelplanner.controller;

import com.group.project.travelplanner.model.Activity;
import com.group.project.travelplanner.service.ActivityServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ActivityController {

    @Autowired
    private ActivityServiceImp activityService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("api/getActivity")
    public Activity getActivity(@RequestParam("id") Long id) {
        return activityService.getActivity(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("api/getActivities")
    public List<Activity> getActivities() {
        return activityService.getActivities();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("api/addActivity")
    public Activity addActivity(@RequestBody Activity activity) {
        return activityService.addActivity(activity);
    }



}
