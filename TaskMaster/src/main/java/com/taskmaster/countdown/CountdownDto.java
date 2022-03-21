package com.taskmaster.countdown;

// CountdownDto (Data Transfer Object) modelling all of the data present
// between the countdown.html and config_countdown.html pages
public class CountdownDto {
	
	private int sessionTimeHrs;
	private int sessionTimeMins;
	private int sessionTimeSecs;
	private int numBreaks;
	private int breakLength; // Note that breakLength is in Minutes
	private Boolean isPomodoro;
	private Boolean isShortPeriod;
	private Boolean isLongPeriod;
	private String state; // Note this is always either "Work" or "Break"
	
	public int getSessionTimeHrs() {
		return sessionTimeHrs;
	}
	
	public void setSessionTimeHrs(int sessionTimeHrs) {
		this.sessionTimeHrs = sessionTimeHrs;
	}
	
	public int getSessionTimeMins() {
		return sessionTimeMins;
	}
	
	public void setSessionTimeMins(int sessionTimeMins) {
		this.sessionTimeMins = sessionTimeMins;
	}
	
	public int getSessionTimeSecs() {
		return sessionTimeSecs;
	}
	
	public void setSessionTimeSecs(int sessionTimeSecs) {
		this.sessionTimeSecs = sessionTimeSecs;
	}
	
	public int getNumBreaks() {
		return numBreaks;
	}
	
	public void setNumBreaks(int numBreaks) {
		this.numBreaks = numBreaks;
	}
	
	public int getBreakLength() {
		return breakLength;
	}
	
	public void setBreakLength(int breakLength) {
		this.breakLength = breakLength;
	}
	
	public Boolean getIsPomodoro() {
		return isPomodoro;
	}
	
	public void setIsPomodoro(Boolean isPomodoro) {
		this.isPomodoro = isPomodoro;
	}
	
	public Boolean getIsShortPeriod() {
		return isShortPeriod;
	}
	
	public void setIsShortPeriod(Boolean isShortPeriod) {
		this.isShortPeriod = isShortPeriod;
	}
	
	public Boolean getIsLongPeriod() {
		return isLongPeriod;
	}
	
	public void setIsLongPeriod(Boolean isLongPeriod) {
		this.isLongPeriod = isLongPeriod;
	}
	
	public String getState() {
		return state;
	}
	
	public void setState(String state) {
		this.state = state;
	}
	
}
